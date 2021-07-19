import Link from 'next/link';

// import avtocarstudioModel from '../models/avtocarstudio';
import avtocarstudioModel from '../models/avtocarstudio-with-texts';
import MainLayout from '../components/MainLayout';

export default function Index() {
  return <MainLayout model={avtocarstudioModel} />;
}
