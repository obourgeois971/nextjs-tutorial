const page = ({ params }) => {
  console.log(params);

  return (
    <div>
      <h1 className='text-7xl'>{params.id}</h1>
    </div>
  );
};

export default page;
