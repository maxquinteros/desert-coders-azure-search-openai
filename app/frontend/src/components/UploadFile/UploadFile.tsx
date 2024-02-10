import React, { useState } from "react";

export const UploadFile = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"initial" | "uploading" | "success" | "fail">("initial");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setStatus("initial");
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            setStatus("uploading");

            const formData = new FormData();
            formData.append("file", file);

            try {
                fetch("/up", {
                    method: "POST",
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="input-group">
                <label htmlFor="file" className="sr-only">
                    Choose a file
                </label>
                <input id="file" type="file" onChange={handleFileChange} />
            </div>
            {file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                </section>
            )}

            {file && (
                <button onClick={handleUpload} className="submit">
                    Upload a file
                </button>
            )}

            <Result status={status} />
        </>
    );
};

const Result = ({ status }: { status: string }) => {
    if (status === "success") {
        return <p>✅ File uploaded successfully!</p>;
    } else if (status === "fail") {
        return <p>❌ File upload failed!</p>;
    } else if (status === "uploading") {
        return <p>⏳ Uploading selected file...</p>;
    } else {
        return null;
    }
};

export default UploadFile;
