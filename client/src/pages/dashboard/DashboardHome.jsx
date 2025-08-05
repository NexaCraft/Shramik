const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Total Jobs Applied</h2>
          <div className="text-3xl font-bold text-blue-600">24</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Profile Completion</h2>
          <div className="text-3xl font-bold text-green-600">75%</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Pending Interviews</h2>
          <div className="text-3xl font-bold text-yellow-600">3</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
