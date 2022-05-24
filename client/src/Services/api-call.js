import axios from 'axios'

export const getAllTemplates = () => {
    let response = axios.get('/templates')
    return response
}

export const createTemplate = (template) => {
    let response = axios({
        url: `/templates${template}`,
        method: 'POST',
        data: template
    })
    return response
}

export const convertTemplateToPdfByID = (id) => {
    let response = axios
      .get(`/templates/${id}`
      .then(res => {
        return res
      })
      .catch(err => console.error(err));
    return response
}

export const downloadTemplateByID (id) => {
    const response = axios({
        url: `/templates/${id}/download`,
        method: 'GET',
        responseType: 'arraybuffer'
    })

    return response;
}

export const deleteTemplateByID = (id) => {
    const response = axios({
        url: `/templates/${id}`,
        method: 'DELETE'
    })

    return response;
} 

