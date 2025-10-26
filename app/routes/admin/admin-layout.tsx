import React from 'react'
import { Outlet } from 'react-router';
import {SidebarComponent} from '@syncfusion/ej2-react-navigations';
import { MobileSideBar, NavItems } from 'components';
import { account } from '~/appwrite/client';
import { redirect } from 'react-router';

export async function clientLoader() {
    try {
        const user = await account.get();
        if(!user.$id) return redirect('/sign-in');

        const existsingUser = await account.get();
    } catch (err) {
        console.log(err);
    }
}

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      <MobileSideBar/>
        <aside className='w-full max-w-[270px] hidden lg:block'>
            <SidebarComponent width={270} enableGestures={false}>
                <NavItems/>
            </SidebarComponent>
        </aside>
        <aside className='children'>
            <Outlet/>
        </aside>
    </div>
  )
}

export default AdminLayout;