import { Container, Main } from '../styles/FileUpload';
import React, { useState } from 'react';

import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import Nprogress from 'nprogress';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    Nprogress.start();
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(
        'https://9c8e3847ddd5.ngrok.io/upload/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          /*onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );

            // Clear percentage
            //setTimeout(() => setUploadPercentage(0), 10000);
          },*/
        }
      );

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
    Nprogress.done();
    setTimeout(window.open('http://localhost:3000', '_blank'), 500);
    window.close();
  };

  return (
    <Container>
      <Main>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className='custom-file mb-2'>
            <input
              type='file'
              accept='.mp4'
              className='custom-file-input'
              id='customFile'
              onChange={onChange}
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>

          <input
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-2'
          />
        </form>
      </Main>
    </Container>
  );
};

export default FileUpload;
