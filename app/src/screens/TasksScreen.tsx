import type { Task } from '../types';
import { CrystalIcon } from '../components/CrystalIcon';
import { Check, Gift } from 'lucide-react';


interface TasksScreenProps {
  tasks: Task[];
}

export function TasksScreen({ tasks }: TasksScreenProps) {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <h2 className="text-xl font-bold text-gray-900">Задания</h2>
      <p className="text-sm text-tg-gray">
        Выполняйте задания и получайте награды!
      </p>
      
      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`
              bg-white rounded-2xl shadow-card p-4
              ${task.completed ? 'opacity-75' : ''}
              animate-slide-up
            `}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                ${task.completed ? 'bg-tg-green/10' : 'bg-tg-blue/10'}
              `}>
                {task.completed ? (
                  <Check className="w-5 h-5 text-tg-green" />
                ) : (
                  <Gift className="w-5 h-5 text-tg-blue" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={`font-semibold text-sm ${task.completed ? 'text-tg-gray line-through' : 'text-gray-900'}`}>
                      {task.title}
                    </h3>
                    <p className="text-xs text-tg-gray mt-0.5">{task.description}</p>
                  </div>
                  
                  {/* Reward */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-tg-blue/10 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-tg-blue">+{task.reward}</span>
                    <CrystalIcon className="w-3 h-3" />
                  </div>
                </div>
                
                {/* Progress */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-tg-gray">
                      {task.completed ? 'Выполнено!' : `${task.progress} из ${task.total}`}
                    </span>
                    <span className="text-tg-blue font-medium">
                      {Math.round((task.progress / task.total) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-tg-gray-lighter rounded-full overflow-hidden">
                    <div 
                      className={`
                        h-full rounded-full transition-all duration-500
                        ${task.completed ? 'bg-tg-green' : 'bg-tg-blue'}
                      `}
                      style={{ width: `${Math.min((task.progress / task.total) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Daily bonus card */}
      <div className="bg-gradient-to-br from-tg-purple to-tg-blue rounded-2xl p-4 text-white mt-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Gift className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Ежедневный бонус</h3>
            <p className="text-xs opacity-80">Заходите каждый день за наградой</p>
          </div>
          <button className="px-4 py-2 bg-white text-tg-blue rounded-xl text-sm font-semibold
                           transition-transform active:scale-95 hover:bg-white/90">
            Получить
          </button>
        </div>
      </div>
    </div>
  );
}
