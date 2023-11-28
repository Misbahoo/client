const Examination = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl uppercase text-gray-500 mx-auto my-5">
          Time table for the upcoming examination
        </h1>
        <div>
          <table className="mx-auto w-2/4 border-collapse border border-gray-500 mb-5">
            <thead className="">
              <tr className="">
                <td className="p-3">SN</td>
                <td>Date</td>
                <td>Subject</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">1</td>
                <td className="p-3">19/10/2023</td>
                <td className="p-3">Mathematics</td>
                <td className="p-3">9:00 AM</td>
              </tr>
              <tr>
                <td className="p-3">2</td>
                <td className="p-3">20/10/2023</td>
                <td className="p-3">Chemistry</td>
                <td className="p-3">9:00 AM</td>
              </tr>
              <tr>
                <td className="p-3">3</td>
                <td className="p-3">25/10/2023</td>
                <td className="p-3">Biology</td>
                <td className="p-3">9:00 AM</td>
              </tr>
              <tr>
                <td className="p-3">4</td>
                <td className="p-3">28/10/2023</td>
                <td className="p-3">English</td>
                <td className="p-3">9:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Examination;
