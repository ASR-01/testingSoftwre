

const Download = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../public/font-installer-win32-x64.zip'; 
    link.download = '../public/font-installer-win32-x64.zip'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Download Font Installer</h1>
      <button onClick={handleDownload}>Download Software</button>
    </div>
  );
};

export default Download;
