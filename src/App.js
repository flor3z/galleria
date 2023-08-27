import React from 'react';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';
import SearchImage from './components/SearchImage';
import ImageList from './components/ImageList';
import fetchImages from './Api/unsplash';
import ErrorDisplay from './components/ErrorDisplay';
import OpenStatement from './components/OpenStatement';

const App = () => {
  const [images, setImages] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onHandleFormSubmit = async (searchTerm) => {
    setLoading(true);

    // const response = await unsplash
    //   .get('/search/photos/?per_page=20&page', {
    //     params: { query: searchTerm.trim() },
    //   })
    //   .catch((err) => {
    //     console.log(err.response.status);
    //   });

    const response = await fetchImages(searchTerm);

    if (response.request.status >= 400 || response.data.results.length === 0) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      setImages(response.data.results);
      setLoading(false);
    }

    console.log(response.data);
  };

  return (
    <>
      <div
        className="relative flex items-center pt-10 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            'linear-gradient(rgba(125,125,120,0.9), rgba(100,50,50,0.9)), url(https://images.unsplash.com/photo-1613052271194-5427710fb39d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDk4NDN8MHwxfHNlYXJjaHwxMXx8cGluayUyMGZsb3dlcnN8ZW58MHx8fHwxNjkxODAzODg2fDA&ixlib=rb-4.0.3&q=80&w=1080)',
        }}
      >
        <div className="w-full max-w-lg mx-auto group drop-shadow-xl">
          <h2 className="text-center text-white tracking-wider text-6xl md:text-8xl font-bold font-raleway pt-10">
            Galleria
          </h2>
          <div className="items-center mt-6">
            <SearchImage onSubmit={onHandleFormSubmit} loading={loading} />
          </div>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center pt-60">
          <Oval
            height={120}
            width={120}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      {error ? (
        <ErrorDisplay />
      ) : images ? (
        <ImageList images={images} />
      ) : (
        <OpenStatement />
      )}
      {/* {images ? <ImageList images={images} /> : <OpenStatement />} */}
    </>
  );
};

export default App;
