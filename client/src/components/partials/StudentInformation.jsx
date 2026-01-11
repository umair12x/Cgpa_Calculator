import React from "react"
import { motion } from "framer-motion"
import { 
  FaIdCardAlt, 
  FaUserGraduate, 
  FaAward,
  FaUniversity,
  FaCalendarAlt,
  FaChartLine,
  FaGraduationCap
} from "react-icons/fa"
import { 
  GiGraduateCap,
  GiTrophyCup
} from "react-icons/gi"

const StudentInformation = ({ studentRespone }) => {
  if (!studentRespone) return null

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        staggerChildren: 0.08,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  const getGPAInfo = (cgpa) => {
    if (cgpa === "N/A") return {
      status: "Not Available",
      color: "from-gray-400 to-gray-500",
      bg: "bg-gray-50 dark:bg-gray-800/30",
      text: "text-gray-600 dark:text-gray-400",
      emoji: "📊",
      level: "neutral"
    }
    
    const numCgpa = parseFloat(cgpa)
    
    if (numCgpa >= 3.5) return {
      status: "Excellent",
      color: "from-emerald-500 to-green-500",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      text: "text-emerald-700 dark:text-emerald-300",
      emoji: "🏆",
      level: "excellent"
    }
    
    if (numCgpa >= 3.0) return {
      status: "Very Good",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-700 dark:text-blue-300",
      emoji: "⭐",
      level: "very-good"
    }
    
    if (numCgpa >= 2.5) return {
      status: "Good",
      color: "from-amber-500 to-yellow-500",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      text: "text-amber-700 dark:text-amber-300",
      emoji: "👍",
      level: "good"
    }
    
    if (numCgpa >= 2.0) return {
      status: "Satisfactory",
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      text: "text-orange-700 dark:text-orange-300",
      emoji: "📈",
      level: "satisfactory"
    }
    
    return {
      status: "Needs Focus",
      color: "from-red-500 to-pink-500",
      bg: "bg-red-50 dark:bg-red-900/20",
      text: "text-red-700 dark:text-red-300",
      emoji: "🎯",
      level: "needs-focus"
    }
  }

  const gpaInfo = getGPAInfo(studentRespone.Cgpa)

  const stats = [
    {
      icon: <FaIdCardAlt />,
      label: "Registration",
      value: studentRespone.registrationNo || "N/A",
      description: "Student ID",
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-100 dark:border-emerald-800/30"
    },
    {
      icon: <FaUserGraduate />,
      label: "Student Name",
      value: studentRespone.studentName || "N/A",
      description: "Full Name",
      color: "from-sky-500 to-cyan-500",
      bg: "bg-sky-50 dark:bg-sky-900/20",
      border: "border-sky-100 dark:border-sky-800/30"
    },
    {
      icon: <FaAward />,
      label: "Overall CGPA",
      value: studentRespone.Cgpa !== "N/A" ? parseFloat(studentRespone.Cgpa).toFixed(3) : "N/A",
      description: gpaInfo.status,
      color: gpaInfo.color,
      bg: gpaInfo.bg,
      border: "border-gray-100 dark:border-gray-800/30",
      isHighlight: true,
      emoji: gpaInfo.emoji
    }
  ]

  const insights = [
    {
      icon: <FaUniversity />,
      label: "University",
      value: "UAF",
      description: "Campus",
      color: "emerald"
    },
    {
      icon: <FaCalendarAlt />,
      label: "Year",
      value: studentRespone.registrationNo?.split('-')[0] || 'N/A',
      description: "Academic Year",
      color: "blue"
    },
    {
      icon: <FaChartLine />,
      label: "CGPA Range",
      value: "0-4.0",
      description: "Scale",
      color: "purple"
    },
    {
      icon: <GiGraduateCap />,
      label: "Status",
      value: studentRespone.Cgpa !== "N/A" ? 'Active' : 'Pending',
      description: "Academic Status",
      color: "violet"
    }
  ]

  const colorClasses = {
    emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    violet: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full sm:w-[85%] px-2 sm:px-3 md:px-4 py-3"
    >
      <div className="relative bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-100/50 dark:border-gray-700/50 shadow-sm overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-sky-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 p-3 sm:p-4 md:p-6">
          {/* Header - Compact for mobile */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <div className="p-2 sm:p-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg shadow-sm">
                  <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent truncate">
                  Academic Profile
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  University of Agriculture, Faisalabad
                </p>
              </div>
            </div>
            
            {/* Trophy for high achievers - hidden on smallest screens */}
            {studentRespone.Cgpa !== "N/A" && parseFloat(studentRespone.Cgpa) >= 3.5 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="hidden xs:block"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <GiTrophyCup className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Status Badge */}
          {studentRespone.Cgpa !== "N/A" && (
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 mb-4 sm:mb-6 rounded-lg bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/30 text-xs sm:text-sm">
              <div className={`w-2 h-2 rounded-full ${
                gpaInfo.level === "excellent" ? 'bg-emerald-500 animate-pulse' :
                gpaInfo.level === "very-good" ? 'bg-cyan-500' :
                gpaInfo.level === "good" ? 'bg-amber-500' :
                'bg-orange-500'
              }`}></div>
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Academic Status:
              </span>
              <span className={`font-semibold ${gpaInfo.text}`}>
                {gpaInfo.status}
              </span>
            </div>
          )}

          {/* Main Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className={`relative ${stat.bg} ${stat.border} border rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all ${
                  stat.isHighlight ? 'shadow-sm sm:shadow-md border-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-sm`}>
                    <div className="text-white text-sm sm:text-base">{stat.icon}</div>
                  </div>
                  
                  {stat.emoji && (
                    <span className="text-sm sm:text-base opacity-80">{stat.emoji}</span>
                  )}
                </div>

                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1 truncate">
                  {stat.label}
                </p>

                <div className="flex items-end gap-1.5">
                  <p className={`text-base sm:text-xl font-bold truncate ${
                    stat.isHighlight 
                      ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}>
                    {stat.value}
                  </p>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Insights Grid */}
          <div className="border-t border-gray-200 dark:border-gray-700/50 pt-4 sm:pt-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-md">
                <FaChartLine className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">
                Academic Details
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.05) }}
                  className="flex items-center gap-2 p-2 sm:p-3 bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-lg border border-gray-100/50 dark:border-gray-700/30"
                >
                  <div className={`p-1.5 rounded-md ${colorClasses[insight.color]}`}>
                    {insight.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                      {insight.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                      {insight.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info for Desktop */}
          <div className="hidden sm:block mt-4 sm:mt-6 pt-4 border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span>CGPA calculated based on official UAF grading system</span>
            </div>
          </div>
        </div>

        {/* Mobile Trophy */}
        {studentRespone.Cgpa !== "N/A" && parseFloat(studentRespone.Cgpa) >= 3.5 && (
          <div className="xs:hidden absolute top-2 right-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm animate-pulse">
              <GiTrophyCup className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default StudentInformation