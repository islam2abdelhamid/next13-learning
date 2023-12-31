import GlassPane from '@/components/GlassPane';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">{children}</GlassPane>
            </body>
        </html>
    );
}
