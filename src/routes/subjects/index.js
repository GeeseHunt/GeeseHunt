import React from 'react';
import AppLayout from '../../components/AppLayout';
import SubjectsLayout from '../../components/SubjectsLayout';

async function action() {
  return {
    title: 'GeeseHunt - Subjects',
    chunks: ['subjects'],
    component: (
      <AppLayout>
        <SubjectsLayout />
      </AppLayout>
    ),
  };
}

export default action;
