import { useEffect } from "react";
import { Test } from "../components/test";

export default function MyAds() {
    useEffect(() => {
      document.title = "My Ads - LinkStudy";
    }, []);

    return (
        <div>
           <Test /> 
        </div>
    );
}