import React from 'react';
import Layout from 'src/containers/Layout';

import ProfileEdit from 'src/components/Profile/Edit/ProfileEdit';
import SettingTab from './SettingTab';
import StyledSettings from './StyledSettings';

const Settings = () => (
  <Layout>
    <StyledSettings>
      <SettingTab />
      <ProfileEdit />
    </StyledSettings>
  </Layout>
);

export default Settings;
