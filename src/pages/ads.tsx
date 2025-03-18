import { useEffect } from "react";
import FilterButtons from "../components/adsfilters";
import Button from "../components/button";

export default function Ads() {
    useEffect(() => {
      document.title = "Ads - LinkStudy";
      document.body.style.position = "relative";
      document.body.style.zIndex = "1";
    }, []);

    return (
        <div className="flex flex-col gap-y-10 lg:items-center">
            <FilterButtons />
            <Button text="Filter" color="bg-secondary"/>
        </div>
    );
}