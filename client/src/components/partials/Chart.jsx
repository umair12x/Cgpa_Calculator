import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  BookOpen,
  Award,
  Star,
  Target,
  TrendingDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const ChartComponent = ({ chartData, overallCGPA, getHighestGPA, getLowestGPA }) => {
  // Calculate metrics
  const totalSemesters = chartData.length;
  const highestGPA = getHighestGPA ? getHighestGPA() : Math.max(...chartData.map(d => d.gpa));
  const lowestGPA = getLowestGPA ? getLowestGPA() : Math.min(...chartData.map(d => d.gpa));
  
  // Calculate improvement
  const getImprovement = () => {
    if (chartData.length < 2) return { percentage: 0, isImproving: true };
    const firstGPA = chartData[0].gpa;
    const lastGPA = chartData[chartData.length - 1].gpa;
    const change = ((lastGPA - firstGPA) / firstGPA) * 100;
    return {
      percentage: Math.abs(change).toFixed(1),
      isImproving: lastGPA > firstGPA
    };
  };

  const improvement = getImprovement();

  // Get bar color based on GPA
  const getBarColor = (gpa) => {
    if (gpa >= 3.5) return {
      bg: "bg-gradient-to-r from-emerald-500 to-green-500",
      hover: "bg-gradient-to-r from-emerald-600 to-green-600",
      text: "text-emerald-700 dark:text-emerald-300"
    };
    if (gpa >= 3.0) return {
      bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      hover: "bg-gradient-to-r from-blue-600 to-cyan-600",
      text: "text-blue-700 dark:text-blue-300"
    };
    if (gpa >= 2.0) return {
      bg: "bg-gradient-to-r from-amber-500 to-yellow-500",
      hover: "bg-gradient-to-r from-amber-600 to-yellow-600",
      text: "text-amber-700 dark:text-amber-300"
    };
    return {
      bg: "bg-gradient-to-r from-red-500 to-pink-500",
      hover: "bg-gradient-to-r from-red-600 to-pink-600",
      text: "text-red-700 dark:text-red-300"
    };
  };

  // Calculate bar width (percentage)
  const getBarWidth = (gpa) => {
    return `${(Math.min(gpa, 4.0) / 4.0) * 100}%`;
  };

  // Find index of highest and lowest GPA
  const highestIndex = chartData.findIndex(d => d.gpa === highestGPA);
  const lowestIndex = chartData.findIndex(d => d.gpa === lowestGPA);

  return (
    <motion.div
      className="w-full p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-[#0b0514] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GPA Performance
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                Semester-wise horizontal comparison
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 rounded-xl border border-green-100 dark:border-green-800/30">
            <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Overall CGPA</div>
              <div className="text-lg font-bold text-green-700 dark:text-green-300">
                {overallCGPA.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Bars Chart */}
      <div className="space-y-6">
        {chartData.map((data, index) => {
          const isHighest = index === highestIndex;
          const isLowest = index === lowestIndex;
          const barColor = getBarColor(data.gpa);
          const barWidth = getBarWidth(data.gpa);
          const prevGPA = index > 0 ? chartData[index - 1].gpa : null;

          return (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Semester Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">
                      Semester {index + 1}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {data.shortSem || `Sem ${index + 1}`}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* GPA Value */}
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${barColor.text}`}>
                      {data.gpa.toFixed(2)}
                    </span>
                    
                    {/* Trend Indicator */}
                    {prevGPA !== null && (
                      <div className="flex items-center gap-1">
                        {data.gpa > prevGPA ? (
                          <ChevronRight className="w-4 h-4 text-green-500" />
                        ) : data.gpa < prevGPA ? (
                          <ChevronLeft className="w-4 h-4 text-red-500" />
                        ) : null}
                        <span className={`text-xs font-semibold ${
                          data.gpa > prevGPA ? 'text-green-600' : 
                          data.gpa < prevGPA ? 'text-red-600' : 'text-gray-500'
                        }`}>
                          {data.gpa > prevGPA ? '+' : ''}
                          {((data.gpa - prevGPA) * 100).toFixed(0)} pts
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Badges */}
                  <div className="flex gap-2">
                    {isHighest && (
                      <div className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> Best
                      </div>
                    )}
                    {isLowest && index > 0 && (
                      <div className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold rounded-full">
                        Needs Focus
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-8 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                {/* Background scale */}
                <div className="absolute inset-0 flex items-center">
                  {[0, 1, 2, 3, 4].map((mark) => (
                    <div
                      key={mark}
                      className="absolute h-full border-r border-gray-300 dark:border-gray-700"
                      style={{ left: `${(mark / 4) * 100}%` }}
                    >
                      <div className="absolute -top-6 text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {mark.toFixed(1)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CGPA Reference Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-green-500 z-10"
                  style={{ left: `${(overallCGPA / 4) * 100}%` }}
                >
                  <div className="absolute -top-6 -left-4 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
                    CGPA
                  </div>
                </div>

                {/* Animated Bar */}
                <motion.div
                  className={`h-full rounded-full ${barColor.bg} relative overflow-hidden group`}
                  initial={{ width: 0 }}
                  animate={{ width: barWidth }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  whileHover="hover"
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>

                {/* Bar Value Indicator */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 px-2 py-1 bg-white dark:bg-gray-900 text-xs font-bold rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  style={{ left: `calc(${barWidth} - 40px)` }}
                >
                  {data.gpa.toFixed(2)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <motion.div 
          className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Semesters
            </div>
          </div>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {totalSemesters}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Total Completed
          </div>
        </motion.div>

        <motion.div 
          className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
              <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Highest
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            {highestGPA.toFixed(2)}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Peak Semester GPA
          </div>
        </motion.div>

        <motion.div 
          className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-sm font-medium text-amber-600 dark:text-amber-400">
              CGPA
            </div>
          </div>
          <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">
            {overallCGPA.toFixed(2)}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Cumulative Average
          </div>
        </motion.div>

        <motion.div 
          className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-100 dark:border-purple-800/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
              {improvement.isImproving ? (
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              )}
            </div>
            <div className={`text-sm font-medium ${
              improvement.isImproving 
                ? "text-purple-600 dark:text-purple-400"
                : "text-orange-600 dark:text-orange-400"
            }`}>
              Trend
            </div>
          </div>
          <div className={`text-2xl font-bold ${
            improvement.isImproving 
              ? "text-purple-700 dark:text-purple-300"
              : "text-orange-700 dark:text-orange-300"
          }`}>
            {improvement.isImproving ? "↗" : "↘"} {improvement.percentage}%
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Performance Change
          </div>
        </motion.div>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            GPA Color Scale
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-red-500 to-pink-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Below 2.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-amber-500 to-yellow-500"></div>
              <span className="text-gray-600 dark:text-gray-400">2.0 - 2.9</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-gray-600 dark:text-gray-400">3.0 - 3.4</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-emerald-500 to-green-500"></div>
              <span className="text-gray-600 dark:text-gray-400">3.5+</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChartComponent;