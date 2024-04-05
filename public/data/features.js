import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaServer } from "react-icons/fa6";

const features = [
  {
    id: 1,
    count: 90,
    feature: "Users",
    icon: <BsFillPersonFill />,
  },
  {
    id: 2,
    count: 30,
    feature: "Locations",
    icon: <MdLocationOn />,
  },
  {
    id: 3,
    count: 50,
    feature: "Servers",
    icon: <FaServer />,
  },
];

export default features;
