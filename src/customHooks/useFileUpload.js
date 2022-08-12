const useFileUpload = () => {
  const handleChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);

    event.preventDefault();
    reader.onload = (event) => {
      console.log("🥶 event.target.result: ", event.target.result);
      setTimeout(() => {
        console.log("🥶Complete: ");
      }, 5000);
    };
  };

  return {
    handleChange,
  };
};

export default useFileUpload;
