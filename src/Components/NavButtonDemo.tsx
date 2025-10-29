import NavButton from './NavButton';

const NavButtonDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">NavButton Component Demo</h1>
          <p className="text-lg text-gray-600">Navigation buttons with configurable text and icons</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Header-style buttons */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Header Navigation Buttons</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <NavButton
                  variant="text"
                  size="sm"
                  color="gray"
                  icon={
                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  }
                  href="#"
                  className="p-2"
                />
                <span className="text-sm text-gray-600">Search button (icon only)</span>
              </div>
              
              <div className="flex items-center gap-4">
                <NavButton
                  variant="filled"
                  size="sm"
                  color="green"
                  icon={
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  }
                  href="#"
                >
                  Log in
                </NavButton>
                <span className="text-sm text-gray-600">Login button (text + icon)</span>
              </div>
            </div>
          </div>

          {/* Footer-style buttons */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Footer Action Buttons</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <NavButton
                  variant="filled"
                  color="green"
                  size="md"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  }
                  href="#"
                  className="whitespace-nowrap"
                >
                  Request demo
                </NavButton>
                <span className="text-sm text-gray-600">Call-to-action button</span>
              </div>
              
              <div className="flex items-center gap-4">
                <NavButton
                  variant="outlined"
                  color="green"
                  size="md"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  }
                  href="#"
                >
                  Contact us
                </NavButton>
                <span className="text-sm text-gray-600">Secondary action button</span>
              </div>
            </div>
          </div>

          {/* Different variants */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Button Variants</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <NavButton variant="filled" color="green" size="sm" href="#">
                  Filled Green
                </NavButton>
                <span className="text-sm text-gray-600">Primary action</span>
              </div>
              
              <div className="flex items-center gap-4">
                <NavButton variant="outlined" color="green" size="sm" href="#">
                  Outlined Green
                </NavButton>
                <span className="text-sm text-gray-600">Secondary action</span>
              </div>
              
              <div className="flex items-center gap-4">
                <NavButton variant="text" color="green" size="sm" href="#">
                  Text Green
                </NavButton>
                <span className="text-sm text-gray-600">Tertiary action</span>
              </div>
            </div>
          </div>

          {/* Different sizes */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Button Sizes</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <NavButton variant="filled" color="green" size="sm" href="#">
                  Small
                </NavButton>
                <span className="text-sm text-gray-600">Compact size</span>
              </div>
              
              <div className="flex items-center gap-4">
                <NavButton variant="filled" color="green" size="md" href="#">
                  Medium
                </NavButton>
                <span className="text-sm text-gray-600">Standard size</span>
              </div>
              
              <div className="flex items-center gap-4">
                <NavButton variant="filled" color="green" size="lg" href="#">
                  Large
                </NavButton>
                <span className="text-sm text-gray-600">Prominent size</span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Usage</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<NavButton
  variant="filled"
  color="green"
  size="sm"
  href="#"
>
  Log in
</NavButton>`}
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">With Icon</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<NavButton
  variant="filled"
  color="green"
  size="sm"
  icon={<SearchIcon />}
  href="#"
>
  Search
</NavButton>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavButtonDemo;

