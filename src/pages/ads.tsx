import { useEffect } from "react";
import FilterButtons from "../components/adsfilters";

export default function Ads() {
    useEffect(() => {
      document.title = "Ads - LinkStudy";
      document.body.style.position = "relative";
      document.body.style.zIndex = "1";
    }, []);

    return (
        <div>
            <FilterButtons />
        </div>
    );
}