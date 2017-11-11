import React from 'react';
import Button from '../components/buttons/Button';

const ButtonPage = () => {
  return (
    <div className="page">
      <div>
        <Button primary>primary</Button>
        <Button primary alt>primary</Button>
        <Button primary plain>primary</Button>
        <Button primary disabled>primary</Button>
        <Button primary alt disabled>primary</Button>
      </div>
      <div>
        <Button secondary>secondary</Button>
        <Button secondary alt>secondary</Button>
        <Button secondary plain>secondary</Button>
        <Button secondary disabled>secondary</Button>
        <Button secondary alt disabled>secondary</Button>
      </div>
      <div>
        <Button success>success</Button>
        <Button success alt>success</Button>
        <Button success plain>success</Button>
        <Button success disabled>success</Button>
        <Button success alt disabled>success</Button>
      </div>
      <div>
        <Button alert>alert</Button>
        <Button alert alt>alert</Button>
        <Button alert plain>alert</Button>
        <Button alert disabled>alert</Button>
        <Button alert alt disabled>alert</Button>
      </div>
      <div>
        <Button warning>warning</Button>
        <Button warning alt>warning</Button>
        <Button warning plain>warning</Button>
        <Button warning disabled>warning</Button>
        <Button warning alt disabled>warning</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
