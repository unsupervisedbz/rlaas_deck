import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register Chart.js core components
Chart.register(...registerables);

// --- Component for the Market Size Bar Chart ---
const MarketSizeChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Register datalabels plugin if available
        if (window.ChartDataLabels) {
            Chart.register(window.ChartDataLabels);
        }
        
        // Data for the market size chart
        const marketSizeData = {
            labels: ['TAM', 'SAM', 'SOM'],
            datasets: [{
                label: 'Market Size (Billions USD)',
                data: [1500, 731, 7.3],
                backgroundColor: ['#66aaff', '#0077ff', '#0044cc'],
                borderColor: ['#4d94ff', '#0052cc', '#003399'],
                borderWidth: 2,
                borderRadius: 8,
                barPercentage: 0.6,
                categoryPercentage: 0.7
            }]
        };

        // Configuration for the chart
        const marketSizeConfig = {
            type: 'bar',
            data: marketSizeData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                let value = context.raw;
                                if (value >= 1000) {
                                    return `$${(value / 1000).toFixed(1)}T`;
                                }
                                return `$${value}B`;
                            }
                        }
                    },
                    datalabels: {
                        color: 'white',
                        anchor: 'center',
                        align: 'center',
                        font: {
                            weight: 'bold',
                            size: 16,
                        },
                        formatter: (value, context) => {
                            if (value >= 1000) {
                                return `$${(value / 1000).toFixed(1)}T`;
                            }
                            return `$${value}B`;
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Market Size (Billions USD)',
                            font: { size: 14 }
                        },
                        ticks: {
                            callback: (value, index, values) => {
                                if (value >= 1000) {
                                    return '$' + (value / 1000) + 'T';
                                }
                                return '$' + value + 'B';
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: { size: 14, weight: 'bold' }
                        }
                    }
                }
            }
        };

        // Create chart instance
        if (chartRef.current) {
             if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            try {
                const ctx = chartRef.current.getContext('2d');
                chartInstance.current = new Chart(ctx, marketSizeConfig);
            } catch (error) {
                console.error('Error creating market size chart:', error);
            }
        }

        // Cleanup function to destroy chart on component unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container relative">
            <canvas ref={chartRef}></canvas>
            {/* Inline labels overlay - positioned inside bars */}
            <div className="absolute top-0 left-0 right-0 flex justify-around items-center h-full">
                <div className="text-center">
                    <div className="text-white text-lg font-bold drop-shadow-lg">
                        $1.5T
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-white text-lg font-bold drop-shadow-lg">
                        $731B
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-white text-lg font-bold drop-shadow-lg">
                        $7.3B
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-2">
                Market size progression from TAM to SAM to SOM
            </div>
        </div>
    );
};

// --- Component for the Business Cost Chart ---
const BusinessCostChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Register datalabels plugin if available
        if (window.ChartDataLabels) {
            Chart.register(window.ChartDataLabels);
        }
        
        // Function to wrap long labels into multiple lines
        const wrapLabels = (label) => {
            const maxLen = 16;
            if (typeof label !== 'string' || label.length <= maxLen) {
                return label;
            }
            const words = label.split(' ');
            let currentLine = '';
            const lines = [];
            for (const word of words) {
                if ((currentLine + ' ' + word).trim().length > maxLen && currentLine.length > 0) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = currentLine ? currentLine + ' ' + word : word;
                }
            }
            if (currentLine) {
                lines.push(currentLine);
            }
            return lines;
        };

        // Data for the chart
        const businessCostData = {
            labels: ['Direct Costs to Private Insurers', 'Indirect Costs to Employers (Lost Productivity)'].map(wrapLabels),
            datasets: [{
                label: 'Annual Cost in Billions ($)',
                data: [1460, 153],
                backgroundColor: ['#0044cc', '#66aaff'],
                borderColor: ['#003399', '#4d94ff'],
                borderWidth: 2,
                borderRadius: 8,
                barPercentage: 0.6,
                categoryPercentage: 0.7
            }]
        };

        // Configuration for the chart
        const businessCostConfig = {
            type: 'bar',
            data: businessCostData,
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: (tooltipItems) => {
                                const item = tooltipItems[0];
                                let label = item.chart.data.labels[item.dataIndex];
                                return Array.isArray(label) ? label.join(' ') : label;
                            },
                            label: (context) => {
                                let value = context.raw;
                                if (value >= 1000) {
                                    return `Cost: $${(value / 1000).toFixed(2)} Trillion`;
                                }
                                return `Cost: $${value} Billion`;
                            }
                        }
                    },
                    datalabels: {
                        color: 'white',
                        anchor: 'center',
                        align: 'center',
                        font: {
                            weight: 'bold',
                            size: 16,
                        },
                        formatter: (value, context) => {
                            if (value >= 1000) {
                                return `$${(value / 1000).toFixed(2)}T`;
                            }
                            return `$${value}B`;
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Annual Cost (USD)',
                            font: { size: 14 }
                        },
                        ticks: {
                            callback: (value, index, values) => {
                                if (value >= 1000) {
                                    return '$' + (value / 1000) + 'T';
                                }
                                return '$' + value + 'B';
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: { size: 14 },
                            autoSkip: false
                        }
                    }
                }
            }
        };

        // Create chart instance
        if (chartRef.current) {
             if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            try {
                const ctx = chartRef.current.getContext('2d');
                chartInstance.current = new Chart(ctx, businessCostConfig);
            } catch (error) {
                console.error('Error creating chart:', error);
            }
        }

        // Cleanup function to destroy chart on component unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="chart-container relative">
            <canvas ref={chartRef}></canvas>
            {/* Labels positioned at the end of each bar for better visibility */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-around">
                <div className="flex justify-end items-center pr-2">
                    <div className="bg-white bg-opacity-95 px-3 py-1 rounded text-sm font-bold text-gray-800 shadow-md">
                        $1.46T
                    </div>
                </div>
                <div className="flex justify-end items-center pr-2">
                    <div className="bg-white bg-opacity-95 px-3 py-1 rounded text-sm font-bold text-gray-800 shadow-md">
                        $153B
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-2">
                Chart showing annual costs to U.S. businesses
            </div>
        </div>
    );
};

// --- Main TenXOpportunityPage Component ---
const TenXOpportunityPage = ({ onNavigateHome }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={onNavigateHome}
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span>Back to Main Site</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto p-4 md:p-8 text-slate-800">
                <section id="intro" className="text-center py-12">
                    <h1 className="text-4xl md:text-6xl font-black text-[#0044cc] tracking-tight">Lyso AI: 10x opportunity to prevent chronic diseases</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">Chronic disease creates a multi-trillion dollar liability for the U.S. economy. This is a data-driven look at the specific costs to businesses and the quantifiable opportunity for AI to mitigate this risk through early detection.</p>
                </section>

                {/* TL;DR Summary Section */}
                <section id="tldr" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 my-8 border border-blue-200">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0044cc] mb-2">TL;DR Summary</h2>
                        <div className="w-16 h-1 bg-[#0044cc] mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2">📊 Disease Prevalence</h3>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• 6 in 10 Americans have at least one chronic disease</li>
                                    <li>• 4 in 10 have two or more chronic diseases</li>
                                    <li>• Accounts for 81% of all hospital admissions</li>
                                    <li>• Accounts for 91% of all prescriptions</li>
                                    <li>• Accounts for 76% of all doctor visits</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2">💰 Financial Impact</h3>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• Private health insurance costs: $1.46 trillion annually</li>
                                    <li>• Indirect employer costs (lost productivity): $153 billion</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2">🤖 High AI Feasibility</h3>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• AI can analyze vast, complex unstructured health data</li>
                                    <li>• Predicts type 2 diabetes up to a decade in advance</li>
                                    <li>• Predicts lung cancer 1-6 years in advance (80-95% accuracy)</li>
                                    <li>• Many other early-stage chronic disease detection examples</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2">📈 Estimated Market Size</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Addressable Market (TAM):</span>
                                        <span className="font-bold text-[#0044cc]">$1.5 Trillion</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Serviceable Addressable Market (SAM):</span>
                                        <span className="font-bold text-[#0044cc]">$731 Billion</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Serviceable Obtainable Market (SOM):</span>
                                        <span className="font-bold text-[#0044cc]">$7.3 Billion</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="problem" className="bg-white rounded-2xl shadow-lg p-6 md:p-10 my-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">The Chronic Disease Burden on Business</h2>
                        <p className="mt-3 max-w-3xl mx-auto text-slate-600">For private insurers and employers, chronic conditions are the single largest driver of cost. Six in 10 Americans have at least one chronic disease, accounting for 81% of hospital admissions and 91% of all prescriptions.</p>
                    </div>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-center mb-2">Annual Costs to U.S. Businesses</h3>
                        <p className="text-center text-slate-600 mb-4">The financial impact is twofold: direct costs paid by private health insurance and indirect costs to employers from lost productivity.</p>
                        <BusinessCostChart />
                    </div>
                </section>

                <section id="solution" className="my-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">AI's Proven Feasibility in Early Detection</h2>
                        <p className="mt-3 max-w-3xl mx-auto text-slate-600">AI can analyze complex health data to forecast disease risk years before symptoms emerge, creating a new window for cost-saving preventative action.</p>
                    </div>
                    <div className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b-2 border-slate-200">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold text-slate-500">Disease</th>
                                        <th className="p-4 text-sm font-semibold text-slate-500">AI Accuracy</th>
                                        <th className="p-4 text-sm font-semibold text-slate-500">Value Creation (Key Finding)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-bold text-slate-800">Lung Cancer</td>
                                        <td className="p-4 font-bold text-[#0044cc]">80-95%</td>
                                        <td className="p-4 text-slate-600">Forecasts future risk 1-6 years in advance from a single CT scan, before nodules are human-visible.</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-bold text-slate-800">Cardiovascular Events</td>
                                        <td className="p-4 font-bold text-[#0044cc]">AUC 0.70-0.87</td>
                                        <td className="p-4 text-slate-600">Predicts future heart attack/stroke risk from a non-invasive retinal scan with accuracy comparable to a heart CT.</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-bold text-slate-800">Type 1 Diabetes</td>
                                        <td className="p-4 font-bold text-[#0044cc]">80-92% Sensitivity</td>
                                        <td className="p-4 text-slate-600">Identifies high-risk individuals up to 12 months before clinical diagnosis using EHR data.</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-bold text-slate-800">Alzheimer's Disease</td>
                                        <td className="p-4 font-bold text-[#0044cc]">&gt;78%</td>
                                        <td className="p-4 text-slate-600">Predicts progression from mild cognitive impairment within 6 years using speech pattern analysis.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-slate-800">Breast Cancer</td>
                                        <td className="p-4 font-bold text-[#0044cc]">AUC 0.70</td>
                                        <td className="p-4 text-slate-600">Predicts 5-year cancer risk from mammograms more accurately than standard models, especially for diverse populations.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                
                <section id="opportunity" className="bg-white rounded-2xl shadow-lg p-6 md:p-10 my-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">The Preventative AI Market Size</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-slate-600">The potential for AI to reduce healthcare costs creates a multi-billion dollar market for these preventative technologies.</p>
                    </div>
                    <div className="mt-8">
                        <MarketSizeChart />
                    </div>
                    <div className="text-center mt-8">
                        <a href="#methodology" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">See Our Sizing Methodology</a>
                    </div>
                </section>
                
                <section id="conclusion" className="bg-gradient-to-br from-[#0044cc] to-[#0077ff] text-white rounded-2xl shadow-lg p-8 md:p-12 my-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">The Value Proposition</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl opacity-90">By identifying high-risk individuals years earlier, preventative AI enables targeted, low-cost interventions that can prevent or delay the onset of high-cost chronic diseases, representing a multi-billion dollar opportunity to reduce claims and improve workforce health.</p>
                </section>

                <section id="methodology" className="bg-white rounded-2xl shadow-lg p-6 md:p-10 my-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Market Sizing Methodology</h2>
                        <p className="mt-3 max-w-3xl mx-auto text-slate-600">The market size estimates are derived from a systematic analysis of healthcare spending data and AI feasibility.</p>
                    </div>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold text-[#66aaff]">Total Addressable Market (TAM): $1.5 Trillion</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed">The TAM represents the total annual direct medical costs for major chronic diseases in the U.S., including both direct healthcare costs and indirect productivity losses. This comprehensive figure reflects the full economic impact of chronic diseases on the U.S. healthcare system and economy.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#0077ff]">Serviceable Addressable Market (SAM): $731 Billion</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed">The SAM is the segment of the TAM that can be realistically targeted by current and near-future AI technologies. This figure includes diseases where AI models have demonstrated high, validated accuracy for early detection (&gt;78%), covering the most impactful chronic conditions that drive healthcare costs.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#0044cc]">Serviceable Obtainable Market (SOM): $7.3 Billion</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed">The SOM is the portion of the SAM that can realistically be captured as revenue by all competing AI companies in the near-to-medium term. This represents the immediate market opportunity for AI-powered preventative healthcare solutions, calculated based on current adoption rates and value capture potential.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Styles */}
            <style jsx>{`
                body { 
                    font-family: 'Inter', sans-serif; 
                    background-color: #f0f4ff; 
                }
                .chart-container { 
                    position: relative; 
                    width: 100%; 
                    max-width: 600px; 
                    margin-left: auto; 
                    margin-right: auto; 
                    height: 350px; 
                    max-height: 400px; 
                }
                @media (min-width: 768px) { 
                    .chart-container { 
                        height: 400px; 
                        max-height: 450px; 
                    } 
                }
                .stat-number { 
                    font-weight: 900; 
                    color: #0044cc; 
                }
            `}</style>
        </div>
    );
};

export default TenXOpportunityPage;
