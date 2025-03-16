import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
      document.title = "Home - LinkStudy";
    }, []);

    return (
      <div>
        <div className="flex md:flex-row flex-col">
          <p className="text-2xl font-bold ml-24 mr-6 mt-12">Find motivated people who want to work in groups to share tips 
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="yellow" className="bi bi-lightbulb-fill inline-flex" viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/> </svg>
            and positive energy <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="yellow" className="bi bi-lightning-fill inline-flex" viewBox="0 0 16 16">
            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>
            </svg>!</p>
          <div className="flex-grow"></div>
          <img className="md:size-70 md:w-auto size-70 w-auto mt-10 mr-32" src="../images/work_together.jpg" alt="reseau de travail"></img>     
        </div>
        <div className="flex md:flex-row flex-col-reverse">
          <img className="md:size-80 md:w-auto size-80 w-auto ml-24" src="../images/Levels.png" alt="entraide"></img> 
          <p className="text-2xl font-bold ml-20 mr-24 mt-12">Look for people studying in your field, at a more or less advanced level than yours, at the place of work and time slot that suits you <svg xmlns="http://www.w3.org/2000/svg"
           width="36" height="36" fill="purple" className="bi bi-highlighter inline-flex mr-4" viewBox="0 0 16 16"> <path fillRule="evenodd"
           d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green" className="bi bi-calendar-check inline-flex mr-4" viewBox="0 0 16 16">
           <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="red" className="bi bi-rocket-takeoff-fill inline-flex mr-4" viewBox="0 0 16 16"> <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
           <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/> </svg> ! </p>
        </div>
        <div className="flex md:flex-row flex-col">
          <p className="text-2xl font-bold ml-24 mr-24 mt-12">Communicate at anytime with groups of work you are interested in <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="blue" className="bi bi-clock inline-flex" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> using our integrated messaging system, and create your own ads !</p>
          <img className="md:size-80 md:w-auto size-80 w-auto mr-24" src="../images/messaging.png" alt="reseau de travail"></img>     
        </div>
      </div>    
    );
  }
  