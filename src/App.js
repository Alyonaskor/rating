import ListCard from './components/ListCard';


import data from './data/data.json'

function App() {

  return (
    <div className="w-[1366px]">
      <div className="h-[144.01px] flex justify-between">

        <div className=" w-[263px] h-[96.78px] ml-[167px] mt-[18px]">
          <img src="/images/Component1.png" alt="logo" ></img>
        </div>

        <div className="flex justify-between">

          <div >
            <img className=" mt-[49px] ml-[10px]  h-[44px]" src="/images/Ellipse1.png" alt="avatar"></img>
          </div>

          <div className="flex justify-end border border-gray-400  mr-[178px] mt-[60px] w-[190px] h-[21px] text-[#FF6100]">
            Created by John Smith

          </div>

        </div>

      </div>
      
      <ListCard heroes={data.body} />

    </div>
  );
}

export default App;
