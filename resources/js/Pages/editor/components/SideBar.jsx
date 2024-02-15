import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,

} from "@heroicons/react/24/solid";
import {InertiaLink} from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';


export default function Sidebar() {
    const logOut = async (e)=>{
        e.preventDefault();
        Inertia.post('/logout');
    }

    return (
        <Card className="fixed h-[59rem] w-full max-w-[20rem] p-4  text-black bg-[#a3b9f8]">
            <div className="mb-2 p-4 border-b border-[#000]">
                <Typography variant="h5" color="blue-gray">
                    NewsLetter-editor
                </Typography>
            </div>
            <List className="flex flex-col gap-6 h-full" >
                <InertiaLink href="/editor/dashboard">
                <ListItem  className="flex gap-4" >
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                </InertiaLink>
                <InertiaLink href="/editor/create-template">
                    <ListItem  className="flex gap-4" >
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Add-Template
                    </ListItem>
                </InertiaLink>
                <ListItem  className="flex gap-4" onClick={logOut}  >
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>


            </List>
        </Card>
    );
}
