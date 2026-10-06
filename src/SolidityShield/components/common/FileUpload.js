const FileUpload = ({ file, handleChange }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    //const droppedFile = event.dataTransfer.files[0];
    handleChange(event);
  };

  const handleFileSelect = (event) => {
    handleChange(event);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    handleChange(event);
  };

  return (
    <div className="sss-file-upload-dropzone flex flex-col items-center justify-center h-64 w-full border-2 border-dashed border-[var(--sss-color-border)] rounded-xl bg-[var(--sss-color-input-bg)] p-4 transition-colors">
      <div
        className="h-full w-full flex items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="text-center">
            <span className="text-base sm:text-lg text-[var(--sss-color-primary)] font-medium">
              Drag & drop your file here, or{" "}
              <span className="text-[#22C55E] font-bold hover:underline">browse</span>
            </span>
            <div className="text-[var(--sss-color-muted)] text-xs mt-1">
              Supports .sol files • Maximum Size: 50 MB
            </div>
          </div>
          <input
            id="file-upload"
            type="file"
            accept=".sol"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      </div>

      {file && (
        <div className="mt-4 w-full break-normal flex items-center justify-center">
          <div className="text-[var(--sss-color-primary)] text-sm font-semibold mb-2 truncate px-3 py-1.5 bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-lg shadow-sm">
            {file.name}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
