import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';

export const ErrorPage: React.FC = (): JSX.Element => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occurred.</p>
      <p className="mb-5">
        <i className="font-medium	 text-lg">
          {error.statusText || error.message}
        </i>
      </p>
      <Button
        className="rounded-full bg-slate-900 text-white px-3 py-2"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </div>
  );
};
