import React, { useState } from "react";
import Sidebar from "../dashboard-landing-page/components/Sidebar.jsx";
import FilterSideBar from "./components/FilterSideBar.jsx";
import IssuesGrid from "./components/IssuesGrid.jsx";
import FilterSideBar from './components/FilterSideBar.jsx';

const BrowseIssues = () => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    status: "",
    keyword: ""
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    console.log("Applied filters:", filters);
    // Here you can filter your issues based on `filters`
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Browse Issues
          </h1>
          <p className="text-muted-foreground">
            Explore civic issues reported by citizens.
          </p>
        </div>

        {/* Filters + Issues Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <FilterSideBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onApplyFilters={handleApplyFilters}
            />
          </div>

          {/* Issues Grid */}
          <div className="flex-1">
            <IssuesGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseIssues;
