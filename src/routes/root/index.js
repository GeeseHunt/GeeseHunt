import React from 'react';
import AppLayout from '../../components/AppLayout';

async function action() {
  return {
    title: 'GeeseHunt',
    chunks: ['root'],
    component: <AppLayout>Content</AppLayout>,
  };
}

export default action;
