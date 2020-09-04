import { Container, Main } from '../styles/FileUpload';
import React, { useState } from 'react';

import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import Nprogress from 'nprogress';

const FileUpload = ({ video }) => {
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
        'https://076f50e981e3.ngrok.io/upload/',
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
      setTimeout(
        window.open(
          `https://demos-digevo-react.vercel.app?video=${filename}`,
          '_blank'
        ),
        1000
      );

      //window.close();
    } catch (err) {
      if (err.response.status === 500) {
        setMessage(
          'There was a problem. Avoid using special characters (#, *, /, @, $, +) in the video name.'
        );
      } else {
        setMessage(err.response.data.msg);
      }
    }
    Nprogress.done();
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
