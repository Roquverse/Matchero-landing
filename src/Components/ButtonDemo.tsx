import Button from './Button';
import IconButton from './IconButton';
import LikeButton from './LikeButton';

const ButtonDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Button Component System</h1>
          <p className="text-lg text-gray-600">All button variants, sizes, and states</p>
        </div>

        {/* Standard Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Standard Buttons</h2>
          
          {/* Button Large */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Large</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Filled Green</h4>
                <Button size="lg" variant="filled" color="green">Request demo</Button>
                <Button size="lg" variant="filled" color="green">Request demo</Button>
                <Button size="lg" variant="filled" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Outlined Green</h4>
                <Button size="lg" variant="outlined" color="green">Request demo</Button>
                <Button size="lg" variant="outlined" color="green">Request demo</Button>
                <Button size="lg" variant="outlined" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Text Green</h4>
                <Button size="lg" variant="text" color="green">Request demo</Button>
                <Button size="lg" variant="text" color="green">Request demo</Button>
                <Button size="lg" variant="text" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Disabled State</h4>
                <Button size="lg" variant="filled" color="green" disabled>Request demo</Button>
                <Button size="lg" variant="outlined" color="green" disabled>Request demo</Button>
                <Button size="lg" variant="text" color="green" disabled>Request demo</Button>
              </div>
            </div>
          </div>

          {/* Button Medium */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Medium</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Filled Green</h4>
                <Button size="md" variant="filled" color="green">Request demo</Button>
                <Button size="md" variant="filled" color="green">Request demo</Button>
                <Button size="md" variant="filled" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Outlined Green</h4>
                <Button size="md" variant="outlined" color="green">Request demo</Button>
                <Button size="md" variant="outlined" color="green">Request demo</Button>
                <Button size="md" variant="outlined" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Text Green</h4>
                <Button size="md" variant="text" color="green">Request demo</Button>
                <Button size="md" variant="text" color="green">Request demo</Button>
                <Button size="md" variant="text" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Disabled State</h4>
                <Button size="md" variant="filled" color="green" disabled>Request demo</Button>
                <Button size="md" variant="outlined" color="green" disabled>Request demo</Button>
                <Button size="md" variant="text" color="green" disabled>Request demo</Button>
              </div>
            </div>
          </div>

          {/* Button Small */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Button Small</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Filled Green</h4>
                <Button size="sm" variant="filled" color="green">Request demo</Button>
                <Button size="sm" variant="filled" color="green">Request demo</Button>
                <Button size="sm" variant="filled" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Outlined Green</h4>
                <Button size="sm" variant="outlined" color="green">Request demo</Button>
                <Button size="sm" variant="outlined" color="green">Request demo</Button>
                <Button size="sm" variant="outlined" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Text Green</h4>
                <Button size="sm" variant="text" color="green">Request demo</Button>
                <Button size="sm" variant="text" color="green">Request demo</Button>
                <Button size="sm" variant="text" color="green" disabled>Request demo</Button>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-600">Disabled State</h4>
                <Button size="sm" variant="filled" color="green" disabled>Request demo</Button>
                <Button size="sm" variant="outlined" color="green" disabled>Request demo</Button>
                <Button size="sm" variant="text" color="green" disabled>Request demo</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Block Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Block Buttons</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Block Button Large</h3>
              <div className="space-y-4 max-w-md">
                <Button size="lg" variant="filled" color="green" block>Request demo</Button>
                <Button size="lg" variant="outlined" color="green" block>Request demo</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Block Button Medium</h3>
              <div className="space-y-4 max-w-md">
                <Button size="md" variant="filled" color="green" block>Request demo</Button>
                <Button size="md" variant="outlined" color="green" block>Request demo</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Block Button Small</h3>
              <div className="space-y-4 max-w-md">
                <Button size="sm" variant="filled" color="green" block>Request demo</Button>
                <Button size="sm" variant="outlined" color="green" block>Request demo</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Icon Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Filled Green</h3>
              <div className="flex space-x-4">
                <IconButton 
                  size="sm" 
                  variant="filled" 
                  color="green"
                  icon={<span className="text-lg">+</span>}
                />
                <IconButton 
                  size="md" 
                  variant="filled" 
                  color="green"
                  icon={<span className="text-lg">+</span>}
                />
                <IconButton 
                  size="lg" 
                  variant="filled" 
                  color="green"
                  icon={<span className="text-lg">+</span>}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Outlined Green</h3>
              <div className="flex space-x-4">
                <IconButton 
                  size="sm" 
                  variant="outlined" 
                  color="green"
                  icon={<span className="text-lg">+</span>}
                />
                <IconButton 
                  size="md" 
                  variant="outlined" 
                  color="green"
                  icon={<span className="text-lg">+</span>}
                />
                <IconButton 
                  size="lg" 
                  variant="outlined" 
                  color="green"
                  icon={<span className="text-lg">+</span>}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Disabled State</h3>
              <div className="flex space-x-4">
                <IconButton 
                  size="sm" 
                  variant="filled" 
                  color="green"
                  disabled
                  icon={<span className="text-lg">+</span>}
                />
                <IconButton 
                  size="md" 
                  variant="outlined" 
                  color="green"
                  disabled
                  icon={<span className="text-lg">+</span>}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Like Buttons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Like Buttons</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Default State</h3>
              <LikeButton size="sm" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover State</h3>
              <LikeButton size="md" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Active State</h3>
              <LikeButton size="lg" />
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Try Different Variants</h3>
              <div className="space-y-4">
                <Button variant="filled" color="green">Primary Action</Button>
                <Button variant="outlined" color="green">Secondary Action</Button>
                <Button variant="text" color="green">Tertiary Action</Button>
                <Button variant="filled" color="green" disabled>Disabled Action</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Different Sizes</h3>
              <div className="space-y-4">
                <Button size="sm" variant="filled" color="green">Small Button</Button>
                <Button size="md" variant="filled" color="green">Medium Button</Button>
                <Button size="lg" variant="filled" color="green">Large Button</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;

