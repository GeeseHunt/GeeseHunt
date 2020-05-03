import React from 'react';
import AppLayout from '../../components/AppLayout';
import ExploreLayout from '../../components/ExploreLayout';

async function action() {
  return {
    title: 'GeeseHunt - Courses',
    chunks: ['courses'],
    component: (
      <AppLayout>
        <ExploreLayout />
      </AppLayout>
    ),
  };
}

export default action;
