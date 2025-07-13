import { ChanelBar } from "../components/Proyecto1Components/ChanelBar";
import { ContentContainer } from "../components/Proyecto1Components/ContentContainer";
import { SideBar } from "../components/Proyecto1Components/SideBar";

export const Proyecto1 = () => {
    return (
        <main className="flex h-screen">
            <SideBar/>
            <ChanelBar/>
            <ContentContainer/>
        </main>
    );
};