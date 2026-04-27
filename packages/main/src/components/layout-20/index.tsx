import { Metadata } from 'next';
import { LayoutProvider } from './components/context';
import { MenuSidebarProps } from './components/types';
import { Wrapper } from './components/wrapper';

// Generate metadata for the layout
export async function generateMetadata(): Promise<Metadata> {
  // You can access route params here if needed
  // const { params } = props;

  return {
    title: 'Dashboard',
    description: '',
  };
}

export function Layout20({ children, menuSidebar, HeaderTitle }: { children: React.ReactNode, menuSidebar: MenuSidebarProps, HeaderTitle: React.ReactElement }) {
  return (
    <LayoutProvider
      style={{
        '--sidebar-width': '330px',
        '--sidebar-collapsed-width': '70px',
        '--sidebar-header-height': '54px',
        '--header-height': '80px',
        '--header-height-mobile': '60px',
        '--toolbar-height': '0px',
      } as React.CSSProperties}
    >
      <Wrapper HeaderTitle={HeaderTitle} menuSidebar={menuSidebar}>
        {children}
      </Wrapper>
    </LayoutProvider>
  );
}
