import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';

async function action() {
  return {
    title: 'GeeseHunt - Courses',
    chunks: ['courses'],
    component: <AppLayout>Courses</AppLayout>,
  };
}

export default action;
