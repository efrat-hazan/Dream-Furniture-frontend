
export const addOrder=async ({ request }) => {
      const formData = await request.formData();
      return fetch('http://localhost:3000/tasks', {
         method: 'POST',
         body: formData,
      });
      }
      // Authorization: Bearer <JWT>

