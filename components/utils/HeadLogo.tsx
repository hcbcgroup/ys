import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProjectHelper } from "../../data/helper";

const HeadLogo : React.FC<{scroller: Boolean}> = ({scroller}) => {
    const router = useRouter();
    const [route, setRoute] = useState<string>("");
    useEffect(() => {
        setRoute(router.pathname.split("/").join(""));
    }, [router])
    return (
        <div>
        <h1>
          <Link href={"/"}>
            <a className={
                'flex flex-col items-start'
            }>
                <span className={ProjectHelper.onStateChangeClassJoin(
                    'font-bold transition-all',
                    scroller
                    ? 'text-base lg:text-lg 2xl:text-xl'
                    : 'text-lg lg:text-xl 2xl:text-2xl'
                )}>Yuchan Shokudo</span>
                <span className={
                    ProjectHelper.onStateChangeClassJoin(
                        'font-normal transition-all',
                        scroller 
                        ? 'text-xs text-slate-600'
                        : 'text-sm lg:text-base text-slate-600'
                    )
                }>{route ? route.toUpperCase() : 'Japanese Izakaya'}</span>
            </a>
          </Link>
        </h1>
      </div>
    )
};

export default HeadLogo;