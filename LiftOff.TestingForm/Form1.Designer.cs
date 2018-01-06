namespace LiftOff.TestingForm
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.LatLabel = new System.Windows.Forms.Label();
            this.LonLabel = new System.Windows.Forms.Label();
            this.LatTextBox = new System.Windows.Forms.TextBox();
            this.LonTextBox = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.WindScoreLabel = new System.Windows.Forms.Label();
            this.UVScoreLabel = new System.Windows.Forms.Label();
            this.TemperatureScoreLabel = new System.Windows.Forms.Label();
            this.HumidityScoreLabel = new System.Windows.Forms.Label();
            this.ConditionsScoreLabel = new System.Windows.Forms.Label();
            this.VisibilityScoreLabel = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.TotalScoreLabel = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // LatLabel
            // 
            this.LatLabel.AutoSize = true;
            this.LatLabel.Location = new System.Drawing.Point(26, 23);
            this.LatLabel.Name = "LatLabel";
            this.LatLabel.Size = new System.Drawing.Size(22, 13);
            this.LatLabel.TabIndex = 0;
            this.LatLabel.Text = "Lat";
            // 
            // LonLabel
            // 
            this.LonLabel.AutoSize = true;
            this.LonLabel.Location = new System.Drawing.Point(26, 48);
            this.LonLabel.Name = "LonLabel";
            this.LonLabel.Size = new System.Drawing.Size(25, 13);
            this.LonLabel.TabIndex = 1;
            this.LonLabel.Text = "Lon";
            // 
            // LatTextBox
            // 
            this.LatTextBox.Location = new System.Drawing.Point(67, 20);
            this.LatTextBox.Name = "LatTextBox";
            this.LatTextBox.Size = new System.Drawing.Size(100, 20);
            this.LatTextBox.TabIndex = 2;
            // 
            // LonTextBox
            // 
            this.LonTextBox.Location = new System.Drawing.Point(67, 45);
            this.LonTextBox.Name = "LonTextBox";
            this.LonTextBox.Size = new System.Drawing.Size(100, 20);
            this.LonTextBox.TabIndex = 3;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(187, 23);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 4;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // WindScoreLabel
            // 
            this.WindScoreLabel.AutoSize = true;
            this.WindScoreLabel.Location = new System.Drawing.Point(91, 127);
            this.WindScoreLabel.Name = "WindScoreLabel";
            this.WindScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.WindScoreLabel.TabIndex = 5;
            this.WindScoreLabel.Text = "label3";
            // 
            // UVScoreLabel
            // 
            this.UVScoreLabel.AutoSize = true;
            this.UVScoreLabel.Location = new System.Drawing.Point(91, 140);
            this.UVScoreLabel.Name = "UVScoreLabel";
            this.UVScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.UVScoreLabel.TabIndex = 6;
            this.UVScoreLabel.Text = "label4";
            // 
            // TemperatureScoreLabel
            // 
            this.TemperatureScoreLabel.AutoSize = true;
            this.TemperatureScoreLabel.Location = new System.Drawing.Point(91, 153);
            this.TemperatureScoreLabel.Name = "TemperatureScoreLabel";
            this.TemperatureScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.TemperatureScoreLabel.TabIndex = 7;
            this.TemperatureScoreLabel.Text = "label5";
            // 
            // HumidityScoreLabel
            // 
            this.HumidityScoreLabel.AutoSize = true;
            this.HumidityScoreLabel.Location = new System.Drawing.Point(91, 166);
            this.HumidityScoreLabel.Name = "HumidityScoreLabel";
            this.HumidityScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.HumidityScoreLabel.TabIndex = 8;
            this.HumidityScoreLabel.Text = "label6";
            // 
            // ConditionsScoreLabel
            // 
            this.ConditionsScoreLabel.AutoSize = true;
            this.ConditionsScoreLabel.Location = new System.Drawing.Point(91, 179);
            this.ConditionsScoreLabel.Name = "ConditionsScoreLabel";
            this.ConditionsScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.ConditionsScoreLabel.TabIndex = 9;
            this.ConditionsScoreLabel.Text = "label7";
            // 
            // VisibilityScoreLabel
            // 
            this.VisibilityScoreLabel.AutoSize = true;
            this.VisibilityScoreLabel.Location = new System.Drawing.Point(91, 192);
            this.VisibilityScoreLabel.Name = "VisibilityScoreLabel";
            this.VisibilityScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.VisibilityScoreLabel.TabIndex = 10;
            this.VisibilityScoreLabel.Text = "label8";
            this.VisibilityScoreLabel.Click += new System.EventHandler(this.VisibilityScoreLabel_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(23, 192);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(43, 13);
            this.label1.TabIndex = 16;
            this.label1.Text = "Visibility";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(23, 179);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(56, 13);
            this.label2.TabIndex = 15;
            this.label2.Text = "Conditions";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(23, 166);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(47, 13);
            this.label3.TabIndex = 14;
            this.label3.Text = "Humidity";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(23, 153);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(67, 13);
            this.label4.TabIndex = 13;
            this.label4.Text = "Temperature";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(23, 140);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(21, 13);
            this.label5.TabIndex = 12;
            this.label5.Text = "Uv";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(23, 127);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(32, 13);
            this.label6.TabIndex = 11;
            this.label6.Text = "Wind";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(23, 216);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(31, 13);
            this.label7.TabIndex = 17;
            this.label7.Text = "Total";
            // 
            // TotalScoreLabel
            // 
            this.TotalScoreLabel.AutoSize = true;
            this.TotalScoreLabel.Location = new System.Drawing.Point(91, 216);
            this.TotalScoreLabel.Name = "TotalScoreLabel";
            this.TotalScoreLabel.Size = new System.Drawing.Size(35, 13);
            this.TotalScoreLabel.TabIndex = 18;
            this.TotalScoreLabel.Text = "label8";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(462, 261);
            this.Controls.Add(this.TotalScoreLabel);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.VisibilityScoreLabel);
            this.Controls.Add(this.ConditionsScoreLabel);
            this.Controls.Add(this.HumidityScoreLabel);
            this.Controls.Add(this.TemperatureScoreLabel);
            this.Controls.Add(this.UVScoreLabel);
            this.Controls.Add(this.WindScoreLabel);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.LonTextBox);
            this.Controls.Add(this.LatTextBox);
            this.Controls.Add(this.LonLabel);
            this.Controls.Add(this.LatLabel);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LatLabel;
        private System.Windows.Forms.Label LonLabel;
        private System.Windows.Forms.TextBox LatTextBox;
        private System.Windows.Forms.TextBox LonTextBox;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label WindScoreLabel;
        private System.Windows.Forms.Label UVScoreLabel;
        private System.Windows.Forms.Label TemperatureScoreLabel;
        private System.Windows.Forms.Label HumidityScoreLabel;
        private System.Windows.Forms.Label ConditionsScoreLabel;
        private System.Windows.Forms.Label VisibilityScoreLabel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label TotalScoreLabel;
    }
}

