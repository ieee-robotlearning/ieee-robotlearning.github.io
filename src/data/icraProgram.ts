export type IcraProgramEntry = {
  time?: string;
  location?: string;
  title: string;
  note?: string;
};

export type IcraProgramSession = {
  title: string;
  time?: string;
  location?: string;
  entries: IcraProgramEntry[];
};

export type IcraProgramGroup = {
  title: string;
  sessions: IcraProgramSession[];
};

export type IcraProgramDay = {
  day: string;
  date: string;
  summary: string;
  groups: IcraProgramGroup[];
};

export const icraProgram: IcraProgramDay[] = [
  {
    day: 'Monday',
    date: 'June 1, 2026',
    summary: 'Opening day with robot learning workshops and tutorials.',
    groups: [
      {
        title: 'Workshops',
        sessions: [
          {
            title: 'Workshops',
            entries: [
              {
                time: 'Full day',
                location: 'Hall A',
                title:
                  'Act to Sense to Act Better: 1st Workshop on Learning and Representations for Active Perception in Manipulation',
              },
              { time: 'Full day', location: 'Hall A', title: 'Synthetic Data for Robot Learning' },
              {
                time: 'Morning',
                location: 'Hall A',
                title: 'ViTac - Learning to See and Feel: Vision-Tactile Synergy for Embodied AI',
              },
              {
                time: 'Full day',
                location: 'Hall A',
                title: 'Workshop on Reinforcement Learning in the Era of Imitation Learning',
              },
              {
                time: 'Full day',
                location: 'Hall A',
                title:
                  'Riemann and Gauss meet Asimov: 3rd Tutorial on Geometric Methods in Robot Learning, Optimization and Control',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    day: 'Tuesday',
    date: 'June 2, 2026',
    summary: 'Keynotes, oral sessions, posters, late-breaking results, and award finalists.',
    groups: [
      {
        title: 'Keynotes',
        sessions: [
          {
            title: 'Keynotes',
            entries: [
              {
                time: '09:00-10:30',
                location: 'Strauss 1-2',
                title: 'Learning Agile Vision-Based Quadrotor Flight: From Simulation to Real-World Adaption',
              },
              {
                time: '11:00-12:30',
                location: 'Hall A1 Plenary',
                title:
                  'Learning to Handle Autonomous Vehicles at the Limits - Lessons Learned from Real-World Autonomous Motorsport',
              },
              {
                time: '11:00-12:30',
                location: 'Hall A1 Plenary',
                title: 'Learning to Navigate: From Scene Understanding to Decision Making',
              },
              {
                time: '14:00-14:50',
                location: 'Hall A1',
                title: 'Can GOFE and Code-as-Policy Close the 100,000-Year "Data Gap" in Robot Manipulation?',
              },
            ],
          },
        ],
      },
      {
        title: 'Oral Sessions',
        sessions: [
          {
            title: 'Field & Space Robotics',
            location: 'Hall A3',
            entries: [
              {
                time: '12:10-12:20',
                title: 'Learning to Anchor Visual Odometry: KAN-Based Pose Regression for Planetary Landing',
              },
            ],
          },
          {
            title: 'Grasping & Manipulation',
            location: 'Lehar 1-4',
            entries: [
              {
                time: '11:10-11:20',
                title: 'DAM-VLA: A Dynamic Action Model-Based Vision-Language-Action Framework for Robot Manipulation',
              },
              {
                time: '12:10-12:20',
                title: 'Leveraging Embodied Mechanical Intelligence for Learning Decluttering Tasks',
              },
              {
                time: '12:20-12:30',
                title:
                  'Language-Guided Dexterous Functional Grasping by LLM Generated Grasp Functionality and Synergy for Humanoid Manipulation (I)',
              },
            ],
          },
          {
            title: 'Manipulation & Locomotion',
            location: 'Lehar 1-4',
            entries: [
              {
                time: '17:25-17:35',
                title: 'Learning Location-Specific Latent Behavior Priors for Occupancy Prediction in Automated Driving',
              },
              { time: '17:55-18:05', title: 'CLF-RL: Control Lyapunov Function Guided Reinforcement Learning' },
            ],
          },
        ],
      },
      {
        title: 'Posters',
        sessions: [
          {
            title: 'Interactive Session 1',
            location: 'Hall C',
            entries: [
              {
                time: '09:00-10:30',
                title:
                  'Learning Constraint-Aware Dynamical Systems from Human Demonstrations for Constrained Manipulation Tasks',
              },
              {
                time: '09:00-10:30',
                title: 'LLM Trainer: Automated Robotic Data Generating Via Demonstration Augmentation Using LLMs',
              },
              {
                time: '09:00-10:30',
                title:
                  'TARAD: Task-Aware Robot Affordance-Centric Diffusion Policy Learned from LLM-Generated Demonstrations',
              },
              {
                time: '09:00-10:30',
                title:
                  'DAPPER: Discriminability-Aware Policy-To-Policy Preference-Based Reinforcement Learning for Query-Efficient Robot Skill Acquisition',
              },
              {
                time: '09:00-10:30',
                title:
                  'What Matters in Learning a Zero-Shot Sim-To-Real RL Policy for Quadrotor Control? a Comprehensive Study',
              },
              { time: '09:00-10:30', title: 'Latent Action Diffusion for Cross-Embodiment Manipulation' },
              {
                time: '09:00-10:30',
                title: 'Seeing Motion, Generating Action: Explicit Motion-Aware Policy for Robotic Action Generation',
              },
              {
                time: '09:00-10:30',
                title:
                  'Zero-Shot Exocentric Viewpoint-Robust Imitation Learning (VIL): Bridging Handheld Gripper and Exocentric Views',
              },
              { time: '09:00-10:30', title: 'Behavior Foundation Model for Humanoid Robots' },
              {
                time: '09:00-10:30',
                title: 'SOE: Sample-Efficient Robot Policy Self-Improvement Via On-Manifold Exploration',
              },
              {
                time: '09:00-10:30',
                title: 'From Dream to Action: Hierarchical Policy Learning with 3D World Imagination for Robotic Manipulation',
              },
              {
                time: '09:00-10:30',
                title:
                  'Learning-Based Robust Control: Unifying Exploration and Distributional Robustness for Reliable Robotics Via Free Energy',
              },
              {
                time: '09:00-10:30',
                title: 'DexKnot: Generalizable Visuomotor Policy Learning for Dexterous Bag-Knotting Manipulation',
              },
              { time: '09:00-10:30', title: 'Robot Crash Course: Learning Soft and Stylized Falling' },
              { time: '09:00-10:30', title: 'Learning on the Fly: Rapid Policy Adaptation Via Differentiable Simulation' },
              {
                time: '09:00-10:30',
                title: 'Real-World Robot Control by Deep Active Inference with a Temporally Hierarchical World Model',
              },
              { time: '09:00-10:30', title: 'Robot Control Stack: A Lean Ecosystem for Robot Learning at Scale' },
            ],
          },
          {
            title: 'Late Breaking Results 1',
            location: 'Hall C',
            entries: [
              {
                time: '09:00-10:30',
                title: 'Rapid Robot Manipulation Policy Learning Via Hierarchical Foundation-Model Prior Distillation',
              },
              {
                time: '09:00-10:30',
                title: 'Reinforcement Learning for Stair Locomotion of a Wheeled Bipedal Robot with Contact-Guided Behavior Cloning',
              },
              {
                time: '09:00-10:30',
                title:
                  'Toward Human Preference Optimization for Vision-Language-Action Models: A Pilot Study on the Limits of Imitation Learning',
              },
              { time: '09:00-10:30', title: 'Learning Contact Tasks Skills Based on DMP and Affordance Templates' },
              {
                time: '09:00-10:30',
                title: 'Learning Traversability Cost Maps with Decomposed Uncertainties Via Continuous-State MEDIRL',
              },
              {
                time: '09:00-10:30',
                title:
                  'Agile Collision Avoidance for Deformable-Tethered Multi-Robot Systems Via Zone-Aware Hierarchical Learning and VLM-Guided Control',
              },
              {
                time: '09:00-10:30',
                title: 'Enhancing VLA Precision in Robotic Manipulation Via FiLM-Based Force/Torque-Vision Integration',
              },
            ],
          },
          {
            title: 'Interactive Session 2',
            location: 'Hall C',
            entries: [
              { time: '15:00-16:30', title: 'Flow-Enabled Generalization to Human Demonstrations in Few-Shot Imitation Learning' },
              { time: '15:00-16:30', title: 'Unlocking the Potential of Soft Actor-Critic for Imitation Learning' },
              { time: '15:00-16:30', title: 'AMPLIFY: Actionless Motion Priors for Robot Learning from Videos' },
              {
                time: '15:00-16:30',
                title: 'Inference-Stage Adaptation-Projection Strategy Adapts Diffusion Policy to Cross-Manipulators Scenarios',
              },
              { time: '15:00-16:30', title: "SCOOP'D: Learning Mixed-Liquid-Solid Scooping Via Sim2Real Generative Policy" },
              { time: '15:00-16:30', title: 'Viper: Verifiable Imitation Learning Policy for Efficient Robotic Manipulation' },
              { time: '15:00-16:30', title: 'Enhancing Classical Motion Planners Using RL with Safety Guarantees' },
              { time: '15:00-16:30', title: 'History-Aware Visuomotor Policy Learning Via Point Tracking' },
              {
                time: '15:00-16:30',
                title: 'ManeuverNet: A Soft Actor-Critic Framework for Precise Maneuvering of Double-Ackermann-Steering Robots with Optimized Reward Functions',
              },
              { time: '15:00-16:30', title: 'Residual Off-Policy RL for Finetuning Behavior Cloning Policies' },
              { time: '15:00-16:30', title: 'JuggleRL: Mastering Ball Juggling with a Quadrotor Via Deep Reinforcement Learning' },
              { time: '15:00-16:30', title: 'NaviGait: Navigating Dynamically Feasible Gait Libraries Using Deep Reinforcement Learning' },
              { time: '15:00-16:30', title: 'Knowledge-Guided Manipulation Using Multi-Task Reinforcement Learning' },
              { time: '15:00-16:30', title: 'AURA: Autonomous Upskilling with Retrieval-Augmented Agents' },
              { time: '15:00-16:30', title: 'Implicit Maximum Likelihood Estimation for Real-Time Generative Model Predictive Control' },
              { time: '15:00-16:30', title: 'An Alignment-Based Approach to Learning Motions from Demonstrations' },
              { time: '15:00-16:30', title: 'NavGSim: High-Fidelity Gaussian Splatting Simulator for Large-Scale Navigation' },
              {
                time: '15:00-16:30',
                title: 'Mimir: Hierarchical Goal-Driven Diffusion with Uncertainty Propagation for End-To-End Autonomous Driving',
              },
              {
                time: '15:00-16:30',
                title: 'Augmented Reality for RObots (ARRO): Pointing Visuomotor Policies towards Visual Robustness',
              },
            ],
          },
          {
            title: 'Late Breaking Results 2',
            location: 'Hall C',
            entries: [
              {
                time: '15:00-16:30',
                title: 'An Efficient Learning-Based Task Planning Approach Using a Bio-Inspired Action Context-Free Grammar for Bimanual Manipulation',
              },
              {
                time: '15:00-16:30',
                title: 'GLaMP: A Grounded Language Model-Based Multi-Agent System for Long-Horizon Robotic Task Planning in Industrial Settings',
              },
              { time: '15:00-16:30', title: 'Learning from Demonstrations Over Riemannian Manifolds Using Neural ODEs' },
            ],
          },
        ],
      },
      {
        title: 'Awards',
        sessions: [
          {
            title: 'Robot Learning Award Finalists 1',
            time: '11:00-12:30',
            location: 'Hall A2',
            entries: [
              { time: '11:00-11:10', title: 'GRITS: A Spillage-Aware Guided Diffusion Policy for Robot Food Scooping Tasks' },
              {
                time: '11:10-11:20',
                title: 'Hierarchical DLO Routing with Reinforcement Learning and In-Context Vision-Language Models',
              },
              { time: '11:20-11:30', title: 'FP3: A 3D Foundation Policy for Robotic Manipulation' },
              { time: '11:30-11:40', title: 'Do You Know Where Your Camera Is? View-Invariant Policy Learning with Camera Conditioning' },
            ],
          },
          {
            title: 'Human-Robot Interaction Award Finalists 2',
            time: '16:45-18:15',
            location: 'Hall A2',
            entries: [
              { time: '16:55-17:05', title: 'Uncertainty Comes for Free: Human-In-The-Loop Policies with Diffusion Models' },
            ],
          },
          {
            title: 'Automation Award Finalists 1',
            time: '16:45-18:15',
            location: 'Hall A2',
            entries: [
              {
                time: '17:25-17:35',
                title: 'ETac: A Lightweight and Efficient Tactile Simulation Framework for Learning Dexterous Manipulation',
              },
            ],
          },
          {
            title: 'Robot Perception Award Finalists 1',
            time: '16:45-18:15',
            location: 'Hall A2',
            entries: [
              {
                time: '18:05-18:15',
                title: 'KISS-IMU: Self-Supervised Inertial Odometry with Motion-Balanced Learning and Uncertainty-Aware Inference',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    day: 'Wednesday',
    date: 'June 3, 2026',
    summary: 'Robot Learning I, humanoid robot learning, aerial robotics, posters, and award finalists.',
    groups: [
      {
        title: 'Keynotes',
        sessions: [
          {
            title: 'Keynotes',
            entries: [
              {
                time: '15:00-16:30',
                location: 'Hall A1',
                title: 'Surviving the Paper Deluge: A One-Year Study in Learning from Demonstration',
              },
            ],
          },
        ],
      },
      {
        title: 'Oral Sessions',
        sessions: [
          {
            title: 'Medical Robotics I',
            location: 'Hall A3',
            entries: [{ time: '11:20-11:30', title: 'ArthroCut: Autonomous Policy Learning for Robotic Bone Resection in Knee Arthroplasty' }],
          },
          {
            title: 'Robot Learning I',
            location: 'Hall A3',
            entries: [
              { time: '16:45-16:55', title: 'Agile in the Face of Delay: Asynchronous End-To-End Learning for Real-World Aerial Navigation' },
              {
                time: '16:55-17:05',
                title: 'Human2Nav: Learning Crowd Navigation from Human Videos across Robots Via Feasibility-Guided Flow Matching',
              },
              {
                time: '17:05-17:15',
                title: 'Hybrid Diffusion Policies with Projective Geometric Algebra for Efficient Robot Manipulation Learning',
              },
              {
                time: '17:15-17:25',
                title: 'Shifted Flow Policy: Uncertainty-Aware Time Reparameterization for Visuomotor Learning',
              },
              { time: '17:25-17:35', title: 'Closed-Loop Action Chunks with Dynamic Corrections for Training-Free Diffusion Policy' },
              { time: '17:35-17:45', title: 'EMMA: Scaling Mobile Manipulation Via Egocentric Human Data' },
              {
                time: '17:45-17:55',
                title: 'Better Than Diverse Demonstrators: Reward Decomposition from Suboptimal and Heterogeneous Demonstrations',
              },
              { time: '17:55-18:05', title: 'GRAM: Generalization in Deep RL with a Robust Adaptation Module' },
              {
                time: '18:05-18:15',
                title:
                  'VGC-RIO: A Tightly Integrated Radar-Inertial Odometry with Spatial Weighted Doppler Velocity and Local Geometric Constrained RCS Histograms',
              },
            ],
          },
          {
            title: 'Humanoid Robots',
            location: 'Lehar 1-4',
            entries: [
              { time: '16:55-17:05', title: 'Mixture-Of-Experts Policy for Smooth and Stable Multi-Posture Fall Recovery in Bipedal Robot' },
              { time: '17:05-17:15', title: 'MimicDroid: In-Context Learning for Humanoid Robot Manipulation from Human Play Videos' },
              {
                time: '17:15-17:25',
                title: 'TOLEBI: Learning Fault-Tolerant Bipedal Locomotion Via Online Status Estimation and Fallibility Rewards',
              },
              { time: '17:35-17:45', title: 'DreamControl: Human-Inspired Whole-Body Humanoid Control for Scene Interaction Via Guided Diffusion' },
              {
                time: '17:45-17:55',
                title: 'Learn to Teach: Sample-Efficient Privileged Learning for Humanoid Locomotion Over Real-World Uneven Terrain',
              },
              {
                time: '17:55-18:05',
                title: 'Learning Humanoid Arm Motion Via Centroidal Momentum Regularized Multi-Agent Reinforcement Learning',
              },
            ],
          },
          {
            title: 'Aerial Robotics',
            location: 'Lehar 1-4',
            entries: [{ time: '16:45-16:55', title: 'Dream to Fly: Model-Based Reinforcement Learning for Vision-Based Drone Flight' }],
          },
        ],
      },
      {
        title: 'Posters',
        sessions: [
          {
            title: 'Interactive Session 3',
            location: 'Hall C',
            entries: [
              {
                time: '09:00-10:30',
                title: 'Policy Diversification through Representation Distinguishability Regularization for Multi-Actor Deep Reinforcement Learning',
              },
              { time: '09:00-10:30', title: 'MotionTrans: Human VR Data Enable Motion-Level Learning for Robotic Manipulation Policies' },
              { time: '09:00-10:30', title: 'Robust Online Residual Refinement Via Koopman-Guided Dynamics Modeling' },
              { time: '09:00-10:30', title: 'SVP: Improving Vision-Language-Action Models with Dual Stochastic Visual Prompting' },
              { time: '09:00-10:30', title: 'Reinforcement Fine-Tuning of Flow-Matching Policies for Vision-Language-Action Models' },
              { time: '09:00-10:30', title: 'ACG: Action Coherence Guidance for Flow-Based Vision-Language-Action Models' },
              { time: '09:00-10:30', title: 'Neural Internal Model Control: Learning a Robust Control Policy Via Predictive Error Feedback' },
              {
                time: '09:00-10:30',
                title: 'PEEK: Guiding and Minimal Image Representations for Zero-Shot Generalization of Robot Manipulation Policies',
              },
              { time: '09:00-10:30', title: 'Placeit! a Framework for Learning Robot Object Placement Skills' },
              { time: '09:00-10:30', title: 'R2BC: Multi-Agent Imitation Learning from Single-Agent Demonstrations' },
              {
                time: '09:00-10:30',
                title: 'Scalable Multi-Objective Robot Reinforcement Learning through Gradient Conflict Resolution',
              },
              {
                time: '09:00-10:30',
                title: 'MoE-DP: An MoE-Enhanced Diffusion Policy for Robust Long-Horizon Robotic Manipulation with Skill Decomposition and Failure Recovery',
              },
              { time: '09:00-10:30', title: 'MoRe-ERL: Learning Motion Residuals Using Episodic Reinforcement Learning' },
              { time: '09:00-10:30', title: 'Beyond the Majority: Long-Tail Imitation Learning for Robotic Manipulation' },
              { time: '09:00-10:30', title: 'Contact-Safe Reinforcement Learning with ProMP Reparameterization and Energy Awareness' },
              { time: '09:00-10:30', title: 'VO-DP: Semantic-Geometric Adaptive Diffusion Policy for Vision-Only Robotic Manipulation' },
              {
                time: '09:00-10:30',
                title: 'Overcoming Imperfect Kinematics in Surgical Robotics through Sim-To-Real Visuomotor Learning',
              },
              { time: '09:00-10:30', title: 'Adaptive Motion Priors with Constrained Optimization' },
            ],
          },
          {
            title: 'Late Breaking Results 3',
            location: 'Hall C',
            entries: [{ time: '09:00-10:30', title: 'Hierarchical LLM-VLA-Controller Integration for Task Generalization' }],
          },
          {
            title: 'Interactive Session 4',
            location: 'Hall C',
            entries: [
              { time: '15:00-16:30', title: 'InSpire: Vision-Language-Action Models with Intrinsic Spatial Reasoning' },
              { time: '15:00-16:30', title: 'EDAIL: Adversarial Imitation Learning Via Exploration-Driven Data Augmentation' },
              { time: '15:00-16:30', title: 'HAND Me the Data: Fast Robot Adaptation Via Hand Path Retrieval' },
              { time: '15:00-16:30', title: 'TWISTED-RL: Hierarchical Skilled Agents for Knot-Tying without Human Demonstrations' },
              {
                time: '15:00-16:30',
                title: 'Flow before Imitation: Learning Dexterous In-Hand Manipulation with Dynamic Visuotactile Shortcut Policy',
              },
              { time: '15:00-16:30', title: 'A Champion-Level Vision-Based Reinforcement Learning Agent for Competitive Racing in Gran Turismo 7' },
              { time: '15:00-16:30', title: 'Learning-Based Observer for Coupled Disturbance' },
              { time: '15:00-16:30', title: 'EasyMimic: A Low-Cost Framework for Robot Imitation Learning from Human Videos' },
              {
                time: '15:00-16:30',
                title: 'ExpReS-VLA: Specializing Vision-Language-Action Models through Experience Replay and Retrieval',
              },
              { time: '15:00-16:30', title: 'Beyond the Teacher: Leveraging Mixed-Skill Demonstrations for Robust Imitation Learning' },
              {
                time: '15:00-16:30',
                title: 'Simultaneous Deep Model-Based Reinforcement Learning and State Inference under Partial Observability',
              },
              {
                time: '15:00-16:30',
                title: 'SoftMimicGen: A Data Generation System for Scalable Robot Learning in Deformable Object Manipulation',
              },
              {
                time: '15:00-16:30',
                title: 'Flow with the Force Field: Learning 3D Compliant Flow Matching Policies from Force and Demonstration-Guided Simulation Data',
              },
              { time: '15:00-16:30', title: 'Diffusion Trajectory-Guided Policy for Long-Horizon Robot Manipulation' },
            ],
          },
          {
            title: 'Late Breaking Results 4',
            location: 'Hall C',
            entries: [
              { time: '15:00-16:30', title: 'Beyond Domain Randomization: Safety Certificates for Reinforcement Learning' },
              { time: '15:00-16:30', title: 'Reward-Free Continual Adaptation for Resilient Space Robots' },
            ],
          },
        ],
      },
      {
        title: 'Awards',
        sessions: [
          {
            title: 'Robot Manipulation & Locomotion Award Finalists 3',
            time: '11:00-12:30',
            location: 'Hall A2',
            entries: [{ time: '11:00-11:10', title: 'Dexora: Open-Source VLA for High-DoF Bimanual Dexterity' }],
          },
          {
            title: 'Planning & Control Award Finalists 4',
            time: '16:45-18:15',
            location: 'Hall A2',
            entries: [
              { time: '17:45-17:55', title: 'HITTER: A HumanoId Table TEnnis Robot Via Hierarchical Planning and Learning' },
              { time: '18:05-18:15', title: 'ActivePusher: Active Learning and Planning with Residual Physics for Nonprehensile Manipulation' },
            ],
          },
        ],
      },
    ],
  },
  {
    day: 'Thursday',
    date: 'June 4, 2026',
    summary: 'Robot Learning II, interactive sessions, and the TC social in Vienna.',
    groups: [
      {
        title: 'Keynotes',
        sessions: [
          {
            title: 'Keynotes',
            entries: [
              {
                time: '11:00-12:30',
                location: 'Hall A1 Plenary',
                title: 'Scalable Robot Decision Making in the Open World: Planning and Plan Prediction with LLMs',
              },
              {
                time: '11:00-12:30',
                location: 'Hall A1 Plenary',
                title: 'Towards Complex Language in Partially Observed Environments',
              },
              {
                time: '11:00-12:30',
                location: 'Hall A1 Plenary',
                title: 'Traveling the Robot Learning Manifold: A Tale of Geometries and Inductive Biases',
              },
              {
                time: '11:00-12:30',
                location: 'Hall A1 Plenary',
                title: 'Intrinsic Robustness: A Journey from Control-Aware Planning to Robust Robot Learning',
              },
            ],
          },
        ],
      },
      {
        title: 'Oral Sessions',
        sessions: [
          {
            title: 'Planning',
            location: 'Hall A2',
            entries: [
              {
                time: '12:10-12:20',
                title: 'URPlanner: A Universal Paradigm for Collision-Free Robotic Motion Planning Based on Deep Reinforcement Learning',
              },
            ],
          },
          {
            title: 'Robot Learning II',
            location: 'Hall A3',
            entries: [
              { time: '16:45-16:55', title: 'SVR-GS: Spatially Variant Regularization for Probabilistic Masks in 3D Gaussian Splatting' },
              {
                time: '16:55-17:05',
                title: 'Dense-Jump Flow Matching with Non-Uniform Time Scheduling for Robotic Policies: Mitigating Multi-Step Inference Degradation',
              },
              { time: '17:05-17:15', title: 'SCIZOR: A Self-Supervised Approach to Data Curation for Large-Scale Imitation Learning' },
              { time: '17:15-17:25', title: 'Deep Sensorimotor Control by Imitating Predictive Models of Human Motion' },
              { time: '17:25-17:35', title: 'ViTaS: Visual Tactile Soft Fusion Contrastive Learning for Visuomotor Learning' },
              { time: '17:35-17:45', title: 'TADPO: Reinforcement Learning Goes Off-Road' },
              { time: '17:45-17:55', title: 'Learning Problem Decomposition for Efficient Sequential Multi-Object Manipulation Planning' },
              { time: '17:55-18:05', title: 'Motion Generation for Modular Robots Using Hierarchical Policies' },
              { time: '18:05-18:15', title: 'Factorizing Diffusion Policies for Observation Modality Prioritization' },
            ],
          },
          {
            title: 'Mechanisms, Design and Control',
            location: 'Lehar 1-4',
            entries: [
              { time: '16:45-16:55', title: 'End-To-End Low-Level Neural Control of an Industrial-Grade 6D Magnetic Levitation System' },
              { time: '17:35-17:45', title: 'Whole-Body Safe Control of Robotic Systems with Koopman Neural Dynamics' },
            ],
          },
          {
            title: 'Applications',
            location: 'Strauss 1-2',
            entries: [{ time: '16:45-16:55', title: 'Localized Graph-Based Neural Dynamics Models for Terrain Manipulation' }],
          },
        ],
      },
      {
        title: 'Posters',
        sessions: [
          {
            title: 'Interactive Session 5',
            location: 'Hall C',
            entries: [
              { time: '09:00-10:30', title: 'GRAPE: Generalizing Robot Policy Via Preference Alignment' },
              { time: '09:00-10:30', title: 'CAPS: Context-Aware Priority Sampling for Enhanced Imitation Learning in Autonomous Driving' },
              {
                time: '09:00-10:30',
                title: 'Data-Efficient Hierarchical Goal-Conditioned Reinforcement Learning Via Normalizing Flows',
              },
              { time: '09:00-10:30', title: 'Rainbow-DemoRL: Combining Improvements in Demonstration-Augmented Reinforcement Learning' },
              {
                time: '09:00-10:30',
                title: 'AutoFocus-IL: VLM-Based Saliency Maps for Data-Efficient Visual Imitation Learning without Extra Human Annotations',
              },
              {
                time: '09:00-10:30',
                title: 'Enhancing Robot Learning through Cognitive Reasoning Trajectory Optimization under Unknown Dynamics',
              },
              { time: '09:00-10:30', title: 'Motion before Action: Diffusing Object Motion As Manipulation Condition' },
              {
                time: '09:00-10:30',
                title: 'DemoBot: Efficient Learning of Bimanual Manipulation with Dexterous Hands from Third-Person Human Videos',
              },
              { time: '09:00-10:30', title: 'Refinery: Active Fine-Tuning and Deployment-Time Optimization for Contact-Rich Policies' },
              {
                time: '09:00-10:30',
                title: 'Teaching to Individual Needs: Bidirectional Teacher-Student Learning for Wheeled-Legged Locomotion',
              },
              {
                time: '09:00-10:30',
                title: 'Generative Adversarial Imitation Learning for Robot Swarms: Learning from Human Demonstrations and Trained Policies',
              },
              { time: '09:00-10:30', title: 'Learning Affordances at Inference-Time for Vision-Language-Action Models' },
            ],
          },
          {
            title: 'Late Breaking Results 5',
            location: 'Hall C',
            entries: [
              { time: '09:00-10:30', title: 'Knowledge-Based Locomotion Policy for Quadruped Robots under Incomplete Terrain Observation' },
              { time: '09:00-10:30', title: 'Knowledge Synthesis in Dynamic Human-Swarm Interactions Using LLMs' },
              {
                time: '09:00-10:30',
                title:
                  'Risk-Aware Control of Tendon-Driven Continuum Robots Via CVaR-MPPI with Residual Learning for Hysteresis Compensation : A Pilot Study',
              },
            ],
          },
          {
            title: 'Interactive Session 6',
            location: 'Hall C',
            entries: [
              { time: '15:00-16:30', title: 'WorldPlanner: Monte Carlo Tree Search and MPC with Action-Conditioned Visual World Models' },
              { time: '15:00-16:30', title: 'X-Diffusion: Training Diffusion Policies on Cross-Embodiment Human Demonstrations' },
              {
                time: '15:00-16:30',
                title: 'Multimodal Variational DeepMDP: An Efficient Approach for Industrial Assembly in High-Mix, Low-Volume Production',
              },
              {
                time: '15:00-16:30',
                title: 'The Better You Learn, the Smarter You Prune: Towards Efficient Vision-Language-Action Models Via Differentiable Token Pruning',
              },
              { time: '15:00-16:30', title: 'DA-MMP: Learning Coordinated and Accurate Throwing with Dynamics-Aware Motion Manifold Primitives' },
              {
                time: '15:00-16:30',
                title: 'Learning Task-Invariant Properties Via Dreamer: Enabling Efficient Policy Transfer for Quadruped Robots',
              },
              { time: '15:00-16:30', title: 'ManipForce: Force-Guided Policy Learning with Frequency-Aware Representation for Contact-Rich Manipulation' },
              { time: '15:00-16:30', title: 'HoMeR: Learning In-The-Wild Mobile Manipulation Via Hybrid Imitation and Whole-Body Control' },
              {
                time: '15:00-16:30',
                title: 'Using Non-Expert Data to Robustify Imitation Learning Via Offline Reinforcement Learning',
              },
              { time: '15:00-16:30', title: 'Vision-Based Policy Learning for High-Speed Autonomous Racing' },
              { time: '15:00-16:30', title: 'Cross-Embodiment Imitation: Learning a Unified Latent Space for Multi-Robot Control' },
              { time: '15:00-16:30', title: 'Robust Robot Navigation through Failure-Aversion Learning' },
              {
                time: '15:00-16:30',
                title: 'Temporal Action Representation Learning for Tactical Resource Control and Subsequent Maneuver Generation',
              },
              { time: '15:00-16:30', title: 'Flip Stunts on Bicycle Robots Using Iterative Motion Imitation' },
            ],
          },
          {
            title: 'Late Breaking Results 6',
            location: 'Hall C',
            entries: [
              { time: '15:00-16:30', title: 'Diffusion Policy for Robot-Assisted Dressing with Moving Human Arms' },
              {
                time: '09:00-10:30',
                title: 'Heterogeneous Skill Learning for Asynchronous Multi-Robot Relay Pushing in Complex Environments',
              },
            ],
          },
        ],
      },
      {
        title: 'TC Social',
        sessions: [
          {
            title: 'IEEE RAS TC Social',
            entries: [
              {
                time: '19:00-22:00 local time',
                location: 'TOGA Bar & Kitchen, Franz-Josefs-Kai 11, 1010 Vienna',
                title:
                  'Informal evening social with the Technical Committees on Robot Learning, Humanoid Robotics, and Robotic Hands, Grasping and Manipulation.',
                note:
                  'Space is limited to 150 attendees on a first-come, first-served basis. Confirmations are sent after membership verification.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    day: 'Friday',
    date: 'June 5, 2026',
    summary: 'Closing day with robot learning workshops and tutorials.',
    groups: [
      {
        title: 'Workshops',
        sessions: [
          {
            title: 'Workshops',
            entries: [
              { time: 'Full day', location: 'Hall A', title: 'Beyond Teloperation: Learning from Diverse Human and Simulation Data' },
              { time: 'Full day', location: 'Hall A', title: 'Bridging the Gap between Robot Learning and Human-Robot Interaction' },
              { time: 'Full day', location: 'Hall A', title: 'From Data to Decisions: VLA Pipelines for Real Robots' },
              { time: 'Full day', location: 'Hall A', title: 'Geometry in the Age of Data-Driven Robotics' },
              {
                time: 'Full day',
                location: 'Hall A',
                title:
                  'RoboTac 2026: Embodied Tactile Intelligence in Predictive Perception, Learning, & Control in Grasp & Manipulation: Emerging the Role of Embodiment and Visuo-Tactile-LLM Foundation Models',
              },
              { time: 'Full day', location: 'Hall A', title: 'Scaling Compositional Intelligence for Multi-Agent Robotic Systems' },
              {
                time: 'Full day',
                location: 'Hall A',
                title: 'Xplore: Cross-Disciplinary aspects of Exploration in Robotics, Reinforcement Learning, and Search',
              },
            ],
          },
        ],
      },
    ],
  },
];
