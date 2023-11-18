

const BASE_URL = 'http://localhost:80';

const api = {
  uploadCsv: async (formData) => {
    try {
      const response = await fetch('http://localhost:80/api/add-file/teacher', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to upload CSV data.');
      }
    } catch (error) {
      throw new Error(`Error uploading CSV data: ${error.message}`);
    }
  },
};

export default api;
