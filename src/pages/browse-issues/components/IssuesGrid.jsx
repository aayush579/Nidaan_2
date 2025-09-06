import React from 'react';
import IssueCard from './IssueCard';

const IssuesGrid = ({ filters }) => {
  // Mock issues data
  const mockIssues = [
    {
      id: 1,
      title: 'Pothole on Main Street',
      description: 'Large pothole causing hazard for drivers.',
      image: '/pot hole.jpg',
      status: 'In Progress',
      statusColor: 'bg-warning text-warning-foreground',
      category: 'Pothole',
      timeAgo: '2 days ago',
      reportedBy: 'Anshuman',
      reporterAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: 2,
      title: 'Broken Streetlight',
      description: 'Streetlight out for several nights.',
      image: '/broken street light.jpg',
      status: 'Reported',
      statusColor: 'bg-accent text-accent-foreground',
      category: 'Street Light',
      timeAgo: '5 days ago',
      reportedBy: 'Shreya',
      reporterAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      id: 3,
      title: 'Overflowing Trash Cans',
      description: 'The trash cans in the park are overflowing, attracting pests and creating an unpleasant environment for visitors.',
      image: '/garbage.jpg',
      status: 'Closed',
      statusColor: 'bg-accent text-accent-foreground',
      category: 'Overflowing Trash Cans',
      timeAgo: '10 days ago',
      reportedBy: 'Aayush',
      reporterAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">Showing {mockIssues.length} issues</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="border border-input rounded-md px-3 py-1 text-sm bg-background">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Most Urgent</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockIssues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssuesGrid;
