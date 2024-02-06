import React, { useState } from "react";

export function Component(): JSX.Element {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        try {
            if (selectedFile) {
                const formData = new FormData();
                formData.append("file", selectedFile);

                // Add any additional data you want to send along with the file

                // Perform the file upload using fetch or your preferred library
                const response = await fetch("up", {
                    method: "POST",
                    body: formData
                });

                // Handle the response as needed
                const data = await response.json();
                console.log("Upload response:", data);
            } else {
                console.error("No file selected for upload.");
            }
        } catch (error) {
            console.error("Error during upload:", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

Component.displayName = "Upload";
