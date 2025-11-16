// src/components/ProjectCard.tsx

import React from 'react';
import './ProjectCard.scss';

interface Project {
    id: string;
    title: string;
    image: string; // Placeholder for image URL
    progress: number;
    cumulativePlan: number;
    cumulativeRealization: number;
    deviation: number;
    targetCompletion: string;
    estRealizationCompleted: string;
    pic: string;
    statusBadge: 'PROGRES' | 'NEW' | 'HOLD';
    yearBadge: string;
    invBadge?: string; // Inventory badge (optional)
}

const dummyProjects: Project[] = [
    {
        id: 'P-001',
        title: 'JASA REHAB RANGKA & CONFIDENTIAL ASSET',
        image: '',
        progress: 67,
        cumulativePlan: 50,
        cumulativeRealization: 67,
        deviation: 17,
        targetCompletion: '30 Oct 2025',
        estRealizationCompleted: '12 Sep 2025',
        pic: 'CONFIDENTIAL ASSET',
        statusBadge: 'PROGRES',
        yearBadge: 'RTN 2025',
    },
    {
        id: 'P-002',
        title: 'JASA REPAIR DRAINASE CONFIDENTIAL ASSET',
        image: '',
        progress: 25.667,
        cumulativePlan: 25.927,
        cumulativeRealization: 25.667,
        deviation: -0.26,
        targetCompletion: '31 Dec 2025',
        estRealizationCompleted: '09 Feb 2026',
        pic: 'CONFIDENTIAL ASSET',
        statusBadge: 'PROGRES',
        yearBadge: 'INV 2025',
        invBadge: 'INV 2025',
    },
    {
        id: 'P-003',
        title: 'PEMBANGUNAN GUDANG BARU',
        image: '',
        progress: 0,
        cumulativePlan: 0,
        cumulativeRealization: 0,
        deviation: 0,
        targetCompletion: '30 Jun 2026',
        estRealizationCompleted: 'N/A',
        pic: 'CONFIDENTIAL ASSET',
        statusBadge: 'NEW',
        yearBadge: 'RTN 2025',
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const deviationText = project.deviation > 0 
        ? `(${project.deviation.toFixed(0)}%) (forward)` 
        : `(${project.deviation.toFixed(2)}%) (behind)`;

    const getProgressColor = (progress: number) => {
        if (progress >= 80) return 'progress-high';
        if (progress > 30) return 'progress-medium';
        return 'progress-low';
    };

    return (
        <div className="project-card-v2">
            <div className={`card-header-banner ${project.statusBadge.toLowerCase()}`}>
                <div className="status-badge">{project.statusBadge}</div>
                <div className="year-badge">{project.yearBadge}</div>
            </div>
            
            <div className="card-content-area">
                <div className="image-col">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="confidential-overlay">CONFIDENTIAL ASSET</div>
                </div>

                <div className="detail-col">
                    <h3 className="project-title-v2">{project.title}</h3>
                    <div className={`progress-bar-container ${getProgressColor(project.progress)}`}>
                        <div 
                            className="progress-bar-fill" 
                            style={{ width: `${project.progress}%` }}
                        >
                            {project.progress.toFixed(project.id === 'P-002' ? 3 : 0)}%
                        </div>
                    </div>

                    <div className="metadata">
                        <p>Cumulative Plan: <span>{project.cumulativePlan}%</span></p>
                        <p>Cumulative Realization: <span>{project.cumulativeRealization}%</span></p>
                        <p className={`deviation ${project.deviation > 0 ? 'positive' : 'negative'}`}>
                            Deviation: <span>{project.deviation.toFixed(project.id === 'P-002' ? 2 : 0)}%</span> {deviationText}
                        </p>
                        <p>Target Completion: <span>{project.targetCompletion}</span></p>
                        <p>Est. Realization Completed: <span>{project.estRealizationCompleted}</span></p>
                        <p>PIC: <span>{project.pic}</span> <span className="confidential-asset">CONFIDENTIAL ASSET</span></p>
                    </div>
                </div>
            </div>

            <div className="card-footer-banner">
                <div className="view-details-btn">View Details<span className="arrow">›</span></div>
            </div>
        </div>
    );
};

export default ProjectCard;
export { dummyProjects };