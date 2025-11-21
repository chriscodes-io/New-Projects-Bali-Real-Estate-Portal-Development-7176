import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiPlus, FiEdit, FiTrash2, FiEye, FiTrendingUp, FiMapPin, 
  FiCalendar, FiDollarSign, FiUsers, FiImage, FiSave, FiX
} = FiIcons;

const ProjectManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Oceanview Villa Resort',
      location: 'Uluwatu',
      status: 'Off-plan',
      price: 'From $450k',
      completion: 'Q4 2025',
      units: 24,
      leads: 45,
      views: 1234,
      yield: '16%',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true,
      created: '2024-01-15'
    },
    {
      id: 2,
      name: 'Tropical Garden Villas',
      location: 'Canggu',
      status: 'Under Construction',
      price: 'From $320k',
      completion: 'Q2 2025',
      units: 18,
      leads: 32,
      views: 987,
      yield: '14%',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: false,
      created: '2024-02-01'
    },
    {
      id: 3,
      name: 'Seminyak Luxury Resort',
      location: 'Seminyak',
      status: 'Completed',
      price: 'From $680k',
      completion: 'Available Now',
      units: 32,
      leads: 28,
      views: 756,
      yield: '15%',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true,
      created: '2024-01-20'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Off-plan':
        return 'bg-blue-100 text-blue-800';
      case 'Under Construction':
        return 'bg-amber-100 text-amber-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const ProjectForm = ({ project, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {project ? 'Edit Project' : 'Add New Project'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-gray-100"
            >
              <SafeIcon icon={FiX} />
            </button>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  defaultValue={project?.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter project name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location *
                </label>
                <select
                  defaultValue={project?.location}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Select location</option>
                  <option value="Uluwatu">Uluwatu</option>
                  <option value="Canggu">Canggu</option>
                  <option value="Seminyak">Seminyak</option>
                  <option value="Ubud">Ubud</option>
                  <option value="Jimbaran">Jimbaran</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Property Type *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                  <option value="Villa">Villa</option>
                  <option value="Resort">Resort</option>
                  <option value="Apartment">Apartment</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status *
                </label>
                <select
                  defaultValue={project?.status}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="Off-plan">Off-plan</option>
                  <option value="Under Construction">Under Construction</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Starting Price *
                </label>
                <input
                  type="text"
                  defaultValue={project?.price}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="From $450k"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Total Units *
                </label>
                <input
                  type="number"
                  defaultValue={project?.units}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="24"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Completion Date
                </label>
                <input
                  type="text"
                  defaultValue={project?.completion}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Q4 2025"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Expected Yield
                </label>
                <input
                  type="text"
                  defaultValue={project?.yield}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="16%"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description *
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                placeholder="Describe your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Project Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-500 transition-colors">
                <SafeIcon icon={FiImage} className="mx-auto text-4xl text-gray-400 mb-4" />
                <p className="text-slate-600 mb-2">Drag and drop images here, or click to browse</p>
                <button
                  type="button"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Choose Files
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                defaultChecked={project?.featured}
                className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500"
              />
              <label className="text-sm text-slate-700">
                Feature this project (additional $50/month)
              </label>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors flex items-center space-x-2"
              >
                <SafeIcon icon={FiSave} />
                <span>{project ? 'Update Project' : 'Create Project'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Projects</h1>
          <p className="text-slate-600">Manage your development listings and track performance</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <SafeIcon icon={FiPlus} />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiTrendingUp} className="text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">3</div>
          <div className="text-slate-600 text-sm">Active Projects</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiUsers} className="text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">105</div>
          <div className="text-slate-600 text-sm">Total Leads</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiEye} className="text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">2,977</div>
          <div className="text-slate-600 text-sm">Total Views</div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiDollarSign} className="text-amber-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-1">11.2%</div>
          <div className="text-slate-600 text-sm">Avg Conversion</div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-slate-800">Your Projects</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Project Image & Info */}
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-slate-800 truncate">{project.name}</h3>
                      {project.featured && (
                        <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiMapPin} className="text-xs" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiDollarSign} className="text-xs" />
                        <span>{project.price}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} className="text-xs" />
                        <span>{project.completion}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiTrendingUp} className="text-xs" />
                        <span>{project.yield} yield</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8 text-center">
                  <div>
                    <div className="text-lg font-bold text-slate-800">{project.leads}</div>
                    <div className="text-xs text-slate-500">Leads</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{project.views}</div>
                    <div className="text-xs text-slate-500">Views</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{project.units}</div>
                    <div className="text-xs text-slate-500">Units</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-gray-100 rounded-lg transition-colors">
                    <SafeIcon icon={FiEye} />
                  </button>
                  <button
                    onClick={() => setEditingProject(project)}
                    className="p-2 text-slate-600 hover:text-slate-800 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={FiEdit} />
                  </button>
                  <button className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                    <SafeIcon icon={FiTrash2} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Forms */}
      {showAddForm && (
        <ProjectForm onClose={() => setShowAddForm(false)} />
      )}
      
      {editingProject && (
        <ProjectForm 
          project={editingProject} 
          onClose={() => setEditingProject(null)} 
        />
      )}
    </div>
  );
};

export default ProjectManagement;