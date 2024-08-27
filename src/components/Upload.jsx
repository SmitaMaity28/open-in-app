import { useState } from "react";
import TagList from "./TagList";
import "./Upload.css";
import "./TagList.css";


function Upload() {
  const [inputdata, setInputData] = useState();
  const [data, setData] = useState([]);
  const [btnDisabled,setDisabled] = useState(false)
  const [removeButton, setRemoveButton] = useState(false)
  const [lodder, setlodder] = useState(false)
  const fileUploadChnages = (e) => {
    console.log(e);
    console.log(e.target.value);
    let file = e.target.files[0];
    setInputData(file);
    console.log(file);
    setDisabled(true)
    // let reader = new FileReader();
    // reader.readAsText(file);
    // reader.onload = (ev) => {
    //   // console.log(reader.result)
    //   reader.result.split("\n").forEach((element, index) => {
    //     if (index > 0) {
    //       let objdata = {
    //         slNo: element.split(")[0].split(",")[0],
    //         link: element.split(")[0].split(",")[1],
    //         prefix: element.split(")[0].split(",")[2],
    //         tags: element.split(")[1].split(","),
    //       };
    //       tempData.push(objdata);
    //     }
    //   });
    //   console.log(tempData);
    //   setData(tempData);
    // };
  };

  const setTableData=(e)=>{
    e.preventDefault();
    setlodder(true);
    setTimeout(()=>{

      let reader = new FileReader();
      let tempData = [];
      reader.readAsText(inputdata);
      reader.onload = (ev) => {
        // console.log(reader.result)
        reader.result.split("\n").forEach((element, index) => {
          if (index > 0) {
            let objdata = {
              slNo: element.split(`"`)[0].split(",")[0],
              link: element.split(`"`)[0].split(",")[1],
              prefix: element.split(`"`)[0].split(",")[2],
              tags: element.split(`"`)[1].split(","),
            };
            tempData.push(objdata);
          }
        });
        console.log(tempData);
        setData(tempData);
        setRemoveButton(true);
        setInputData();
        const fileInput = document.getElementById("upload");
        fileInput.value = ""
        setlodder(false);
        setDisabled(false)
    }
    },2000)
    
}

const removeButtonHandle = () => {
  setInputData();
  setDisabled(false);
  const fileInput = document.getElementById("upload");
  fileInput.value = ""; // Clear the selected file
  // fileInput.click(); // Trigger the click event to reset the file input
}
  return (
    <div className="App flex flex-col items-center justify-center">


     <div className=''>
      <div className='box'>
      <div className='input-bx'>
        <form action='' className='form relative' >
          <input type="file" name="file-data"   onChange={(e) => { fileUploadChnages(e) }} id="upload" accept='.csv,.xls' hidden/>
          <label for='upload' className='uploadable '>
          <span><img className='excel' src='https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png' alt='excelLogo'/></span>
          <p>{inputdata?inputdata.name:'Drag your excel sheet here or browse'}</p>
         
          </label>
          {(inputdata && !removeButton) && <p className="text-red-600 absolute z-40 p-4 top-[56%] left-[35%] cursor-pointer" onClick={()=>{removeButtonHandle()}}>Remove</p>}
          <button className={btnDisabled?'upload-btn':'upload-btn disabled'} onClick={(e)=>{setTableData(e)}} >{ lodder ?<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> : 'Upload'}</button>
        </form>
      </div>
    </div>
    </div>
      {data.length > 0 && (
        <div className="lg:h-[319px] lg:w-[965px] scrollbar-hide mt-3  overflow-scroll rounded-[8px] bg-[#F5F5F5]">
              <table >
  <thead  >
    <tr className="tablehead   " >
      <th className='min-w-[70px]'  >
      Sl No.
      </th>
      <th className='min-w-[200px]'> 
      Links
      </th>
      <th className='min-w-[150px]' >
      Prefix
      </th>
      <th className='min-w-[200px]'>
      Add Tags
      </th>
      <th className='min-w-[200px]'>
      Selected Tags
      </th>
    </tr>
  </thead>
</table>
          {data.map((objdata, index) => {
            if (index > 0) {
              return (
                <div>
                  <TagList
                    key={index}
                    slNo={objdata?.slNo}
                    links={objdata?.link}
                    prefix={objdata?.prefix}
                    tags={objdata?.tags}
                  ></TagList>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Upload;