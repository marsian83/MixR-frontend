const Cities = () => {
  const rows = [
    { cities: ["Miami", "New York" , "Los Angles" , "Chicago"] },
    { cities: ["Austin", "Orlando" , "Orlando" , "Housten" ] },
    { cities: ["Boston", "Philipeldia" , " Dallas" ,"San Diego" ] },
  ];

  return <div className="p-page pt-12">
    <div className="pb-6 text-2xl font-medium">Shop by City</div>

    <div className="flex flex-col gap-y-5">
        {rows.map((data,i)=>(
            <div className="flex justify-between items-center text-center " key={i}> 

            {data.cities.map((city,k)=>(
                    <button className="border-[1px] rounded-lg shadow-[0px_1px_2px_1px_rgba(0,0,0,0.1)] w-[23%] text-base font-medium py-3 " key={k}>{city}</button>

            ))}
            </div>
        ))}
    </div>

    <div className="flex items-center justify-center pt-10 pb-4">
        <div className=" border-2 text-sm rounded-md font-normal px-7 py-3">See all</div>
    </div>

    </div>;
};

export default Cities;
