import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-1 pb-10">
        {datas.map((data, idx) => (
          <Card key={idx} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
