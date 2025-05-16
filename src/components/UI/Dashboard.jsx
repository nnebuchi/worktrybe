import { useState, useContext, useEffect, useCallback, useRef } from "react";

import {ongoingHire, addAssessmentData} from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import DashboardNavbar from "../DashboardNavbar";
import DashboardSidebar from "../DashboardSidebar";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [ongoingHireData, setOngoingHireData] = useState(null);
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const closeModalRef = useRef();
  const fileInputRef = useRef();


  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => {
      if (file.type.startsWith('image/')) {
        // Generate image preview
        return { type: 'image', url: URL.createObjectURL(file) };
      } else {
        // Use a generic icon for non-image files
        return { type: 'file', name: file.name, icon: getFileIcon(file.type) };
      }
    });

    setPreviews(previews);
  };

  const getFileIcon = (fileType) => {
    // Map file types to appropriate icons
    if (fileType.includes('pdf')) {
      return '📄'; // PDF icon
    } else if (fileType.includes('word')) {
      return '📝'; // Word document icon
    } else if (fileType.includes('excel')) {
      return '📊'; // Excel icon
    } else if (fileType.includes('zip')) {
      return '📦'; // Zip file icon
    } else {
      return '📁'; // Generic file icon
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('instructions', content);
    formData.append('hire_id', ongoingHireData.id);

    files.forEach((file, index) => {
      formData.append(`docs[${index}]`, file); // Use square brackets for array syntax
    });
    
    // return;
    try {
      
      
      const response = await addAssessmentData(user?.token, formData);
      if(response?.status == 'success'){
        toast.success(response.message);

      }else{
        toast.error(response.message)
      }

      // alert('Content and files submitted successfully!');
      
      setContent('');
      setFiles([]);
      setPreviews([]);
      fileInputRef.current.value = '';
      closeModalRef?.current?.click()
      getOngoingHireMemoized();
      // also clear the value of the file input field
      document.getElementById('fileInput').value = '';
    } catch (error) {
      toast.error(error.message);
      console.error('Submission failed:', error);
    }
  };

  const getOngoingHire = async () => {
    const res = await ongoingHire(user?.token);
    if (res?.status === "success") {
      
      setOngoingHireData(res?.data);
    }else{
      console.log(res);
      
    }
  }

  const getOngoingHireMemoized = useCallback(getOngoingHire, []);

  const dashboardCardValues = [
    {
      cardValue: "170+",
      cardSubtitle: "Active VA's",
      iconBgColor: "red-100",
      iconColor: "red-500",
      icon: "fa-heart",
    },
    {
      cardValue: "170+",
      cardSubtitle: "Active VA's",
      iconBgColor: "blue-100",
      iconColor: "blue-500",
      icon: "fa-briefcase",
    },
    {
      cardValue: "170+",
      cardSubtitle: "Completed Tasks",
      iconBgColor: "green-100",
      iconColor: "green-500",
      icon: "fa-check-circle",
    },
    {
      cardValue: "170+",
      cardSubtitle: "Pending Tasks",
      iconBgColor: "orange-100",
      iconColor: "orange-500",
      icon: "fa-clock",
    },
  ];
 

  const VAS = [
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "MBA",
      ratings: "80%",
      date: "15-05-2024",
    },
   
  ];
  const upcomingMeetings = [
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
  ];

  useEffect(() => {
    if (user) {
      getOngoingHireMemoized();
    }
  }, [user, getOngoingHireMemoized]);

  useEffect(() => {
    
    console.log(files?.length);
    
  }, [files]);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 group-hover:text-ftvwine-25 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-ftvwine-400 hover:bg-ftvwine-300 focus:ring-ftvwine-300">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <div className="antialiased bg-gray-50 bg-ftvwine-25">
       
       <DashboardNavbar />
      
        <DashboardSidebar />
        <main className="p-4 md:ml-64 h-auto pt-20 bg-[#EEF0F2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardCardValues.map((card, index) => {
              return (
                <div
                  className="hover:bg-ftvblue-25 bg-white border-gray-300 rounded-lg h-32 md:h-32 bg-white flex items-center justify-start px-3 plusjarkatasans"
                  key={index}>
                  <div className="flex space-x-5 items-center ">
                    <div
                      className={`h-12 w-12 rounded-full bg-${card.iconBgColor} flex items-center justify-center`}>
                      <span
                        className={`fa ${card.icon} text-${card.iconColor}`}></span>
                    </div>
                    <div>
                      <h1 className="text-lg text-ftvblack font-bold">
                        {card.cardValue}
                      </h1>
                      <p className="text-sm text-[#030229]">
                        {card.cardSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Preselected VA */}
          <div className="max-w-6xl mx-auto plusjakartasans mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
              <div className="pb-4 flex justify-between items-center w-full">
                <h2 className="text-lg font-semibold">Preselected VAs</h2>
                {
                  ongoingHireData?.hire_matches.length > 0 && ongoingHireData.assessments?.length < 1  &&
                  
                  <button
                  data-modal-target="static-modal"
                  data-modal-toggle="static-modal"
                  type="button"
                  className="w-2/12 text-white bg-ftvwine-500  hover:bg-ftvprimary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-ftvsecondary  hover:bg-ftvprimaryy focus:ring-ftvgrey cursor-pointer space-x-2">
                  <span className="fa fa-checklist me-3"></span>
                  Start Assessment
                </button>
                }
                
                
              </div>

              <div className="overflow-auto max-h-70 border-1 border-[#EEF0F2] rounded-lg  ">
                <table className="w-full border-collapse relative">
                  <thead className="bg-gray-100 ">
                    <tr className="text-left text-sm text-gray-600">
                      <th className="p-3">
                        <input
                          type="checkbox"
                          className="outline-none border-none ring-1 ring-[#EEF0F2] rounded"
                        />
                      </th>
                      <th className="p-3">Name</th>
                      {/* <th className="p-3">Job Role</th> */}
                      {/* <th className="p-3">Location</th>
                      <th className="p-3">Experience</th>
                      <th className="p-3">Education</th>
                      <th className="p-3">Ratings</th>
                      <th className="p-3">Date Added</th> */}
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody className="max-h-50 ">
                    {ongoingHireData?.hire_matches.map((match, index) => {
                      return (
                        <tr
                          className=" text-ftvblack text-sm even:bg-gray-50 odd:bg-white"
                          key={index}>
                          <td className="p-3">
                            <input
                              type="checkbox"
                              className="outline-none border-none ring-1 ring-[#EEF0F2] rounded mb-3"
                            />
                          </td>
                          <td className="p-3 flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <span className="text-ellipsis">
                              {match.applicant.first_name} {match.applicant.last_name}
                            </span>
                          </td>
                          {/* <td className="p-3 text-ellipsis">{match.applicant.jobRole}</td>
                          <td className="p-3">{match.applicant.location}</td> */}
                          {/* <td className="p-3">{match.applicant.experience}</td>
                          <td className="p-3">{match.applicant.education}</td>
                          <td className="p-3 text-green-600 font-semibold">
                            ▲ {match.applicant.ratings}
                          </td>
                          <td className="p-3">{match.applicant.date}</td> */}
                          <td className="p-3">
                            <button className="px-4 py-2 text-blue-600 border hover:bg-blue-50 cursor-pointer rounded-lg">
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Assessments Modal */}

          {/* <!-- Modal toggle --> */}

          {/* <!-- Main modal --> */}
          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm bg-grey-200">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5  rounded-t ">
                  <h3 className="text-xl font-semibold text-ftvblack text-ftvblack">
                    Upload Accessment
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-ftvblack rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                    data-modal-hide="static-modal"
                    
                    >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={5}
                      className="w-full rounded"
                      placeholder="Type your assessment"
                    />
                  </div>
                  <div>
                    <label>Attach Files (optional)</label>
                    <input
                      type="file"
                      name="files"
                      multiple
                      onChange={handleFileChange}
                      className="w-full border rounded"
                      ref={fileInputRef}
                    />
                  </div>
                  <div className="flex flex-wrap mt-4">
                    {previews.map((preview, index) => (
                      <div key={index} className="m-2 p-2 border rounded">
                        {preview.type === 'image' ? (
                          <img
                            src={preview.url}
                            alt={`Preview ${index}`}
                            style={{ width: '100px', height: '100px', objectFit:"cover" }}
                          />
                        ) : (
                          <div className="text-center">
                            <div className="text-4xl">{preview.icon}</div>
                            <div className="text-sm mt-2">{
                              preview.name.length > 10 ?
                              preview.name.substring(0, 10)+'...':
                              preview.name
                            }</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                    

                  <div className="flex items-center p-4 md:p-5 rounded-b space-x-5 ">
                    <button
                      data-modal-target="static-modal"
                      type="submit"
                     
                      className="min-w-3/12 text-white bg-ftvtransparent  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-ftvprimary  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer space-x-2"
                    >
                      Send Assessment
                    </button>
                    <button
                      data-modal-hide="static-modal"
                      type="button"
                      ref={closeModalRef}
                      className="min-w-3/12 text-ftvsecondary bg-transparent  hover:bg-blue-50 focus:ring-1 focus:outline-none  ring-1 ring-ftvsecondary focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-transparent  hover:bg-blue-50 focus:ring-ftvgrey cursor-pointer space-x-2"
                      >
                      Cancel
                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>

          <div className="flex justify-between item-center space-x-5 plusjakartasans">
            <div className="rounded-lg bg-white min-h-48 md:min-h-72 w-7/12"></div>
            <div className="rounded-lg bg-white min-h-48 md:min-h-72 w-5/12 p-5">
              <div className="flex justify-between mb-4">
                <h1 className="text-lg text-gray-500 font-semibold">
                  Upcoming Meetings
                </h1>
                <button type="button">
                  <span className="fa fa-ellipsis text-gray-400"></span>
                </button>
              </div>
              <div className="max-h-72 overflow-auto">
                {upcomingMeetings.map((meeting, index) => {
                  return (
                    <div
                      className="border-l-blue-300 border-b-0 border-r-0 border-t-0 border-4 rounded-xl  bg-white space-y-1 p-3 mb-2"
                      key={index}>
                      <div className="flex justify-between items-center">
                        <div className="space-x-3 text-sm">
                          <span className="fa fa-circle text-sm text-ftvsecondary"></span>
                          <span className="font-medium">
                            {meeting.startTime} - {meeting.endTime}
                          </span>
                        </div>
                        <span className="h-8 flex items-center bg-[#24DDF0] px-3 text-xs rounded-full">
                          {meeting.purpose}
                        </span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <div className="w-6 h-6 rounded-full  bg-gray-300">
                          <img
                            src="/bag.svg"
                            alt=""
                            className="rounded-full w-full"
                          />
                        </div>
                        <div className="w-10/12">
                          <h3 className="font-normal text-ftvblack text-sm">
                            Your interview meeting with{" "}
                            <span className="font-semibold">
                              {" "}
                              {meeting.participantFirstName} {""}{" "}
                              {meeting.participantLastName}
                            </span>
                          </h3>
                          <p className="text-[#72777A] text-xs">
                            {meeting.participantTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
