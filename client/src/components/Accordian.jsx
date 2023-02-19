import React, { useState } from "react";

const minusIcon = "-";
const plusIcon = "+";

const Accordian = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div
      className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1">Gibberish</h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur
          sapiente reiciendis blanditiis fuga modi iure officiis autem possimus
          aspernatur. Veritatis unde laudantium pariatur animi excepturi culpa
          quo, nesciunt exercitationem!
        </p>
      </div>
    </div>
  );
};

export default Accordian;
