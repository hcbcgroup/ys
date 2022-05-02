import {FiFacebook, FiInstagram} from "react-icons/fi";
const Feeds : React.FC<{className: string}> = ({className}) => {
    return (
        <div className={className}>
            <h3 className="font-bold text-xl mb-4">Or Find Us On Social!</h3>
            <nav className="flex justify-center items-center space-x-2">
                <a className="transition-all hover hover:text-opacity-50" href="https://facebook.com/YakitoriYuchan">
                    <FiFacebook className="text-3xl" />
                </a>
                <a className="transition-all hover hover:text-opacity-50" href="https://instagram.com/yakitoriyuchan">
                    <FiInstagram className="text-3xl" />
                </a>
            </nav>
        </div>
    )
};

export default Feeds;