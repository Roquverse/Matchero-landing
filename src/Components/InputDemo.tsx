import Input from '../Components/Input';

const InputDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Input Component States</h1>
          <p className="text-lg text-gray-600">All input field variations and states</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Default State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              className="hover:border-gray-400"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Focus State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Error State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              error
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Success State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              success
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              disabled
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Read-only State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              disabled
              readOnly
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Default State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              className="hover:border-gray-400"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Focus State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Error State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              error
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Success State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              success
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              disabled
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Read-only State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              disabled
              readOnly
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Default State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              className="hover:border-gray-400"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Focus State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              className="focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Error State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              error
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Success State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              success
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              disabled
            />
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Read-only State</h3>
            <Input 
              label="Label" 
              placeholder="Input-sm" 
              size="sm"
              disabled
              readOnly
            />
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Try Different States</h3>
              <div className="space-y-4">
                <Input 
                  label="Name" 
                  placeholder="Enter your name" 
                  size="sm"
                />
                <Input 
                  label="Email" 
                  placeholder="Enter your email" 
                  type="email"
                  size="sm"
                />
                <Input 
                  label="Password" 
                  placeholder="Enter your password" 
                  type="password"
                  size="sm"
                />
                <Input 
                  label="Phone" 
                  placeholder="Enter your phone number" 
                  type="tel"
                  size="sm"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Different Sizes</h3>
              <div className="space-y-4">
                <Input 
                  label="Small Input" 
                  placeholder="Input-sm" 
                  size="sm"
                />
                <Input 
                  label="Medium Input" 
                  placeholder="Input-md" 
                  size="md"
                />
                <Input 
                  label="Large Input" 
                  placeholder="Input-lg" 
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
